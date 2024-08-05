import { ChangeEvent, FC, useState } from 'react';
import { useForm } from 'react-hook-form';
//lib
import classNames from 'classnames';
import { yupResolver } from '@hookform/resolvers/yup';
//api
import {
  useGetTokenQuery,
  useRegisterUserMutation
} from '@/features/userAuth/api/userAuthAPI';
//ui
import { Button, Error, Input, Loader } from '@/shared/ui';
import { PositionsList } from '@/entities/positions/ui';
//types
import { IUser } from '@/entities/users/types/userTypes';
//validation schema
import { userFormValidationSchema } from '../../libs/validationSchema/userFormValidationSchema';
// styles
import styles from './UserForm.module.scss';

interface UserFormProps {}

export const UserForm: FC<UserFormProps> = ({}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<string>('');

  useGetTokenQuery();
  const [registerUser, { isLoading, isSuccess, isError }] =
    useRegisterUserMutation();

  const {
    formState: { isValid, errors },
    register,
    handleSubmit,
    reset,
    setValue
  } = useForm<any>({
    mode: 'onChange',
    resolver: yupResolver<any>(userFormValidationSchema),
    defaultValues: {
      phone: '+38',
      photo: '@/shared/libs/assets/png/photo-cover.png'
    }
  });

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);
    setValue('photo', file, { shouldValidate: true });
  };

  const handleUploadClick = () => {
    const input = document.getElementById('fileInput') as HTMLInputElement;
    if (input) {
      input.click();
    }
  };

  const onSubmitFormClick = async (data: IUser) => {
    await registerUser(data);

    if (isLoading) {
      return <Loader />;
    }

    if (isSuccess) {
      reset();
      setSelectedFile(null);
      setSelectedPosition('');
    }

    if (isError) {
      return <Error />;
    }
  };

  return (
    <form
      className={styles.UserForm}
      onSubmit={handleSubmit(onSubmitFormClick)}
    >
      <Input
        type='text'
        placeholder='Your name'
        register={register('name', { required: true })}
        error={errors.name}
      />
      <Input
        type='email'
        placeholder='Email'
        register={register('email', { required: true })}
        error={errors.email}
      />
      <div className={styles.phoneTextForm}>
        <Input
          type='tel'
          placeholder='Phone'
          register={register('phone', { required: true })}
          error={errors.phone}
        />
        <span>+38 (XXX) XXX - XX - XX</span>
      </div>
      <PositionsList
        selectedPosition={selectedPosition}
        setSelectedPosition={setSelectedPosition}
        setValue={setValue}
        register={register}
      />
      <div className={styles.Photo}>
        <div
          className={classNames(styles.UploadButton, {
            [styles.errorStyleUploadButton]: errors.photo
          })}
          onClick={handleUploadClick}
        >
          Upload
        </div>
        <div
          className={classNames(styles.FileUpload, {
            [styles.errorStyleFileUpload]: errors.photo
          })}
        >
          <Input
            type='file'
            id='fileInput'
            onChange={handleFileChange}
            error={errors.photo}
          />
          {selectedFile ? (
            <div className={styles.FileName}>{selectedFile.name}</div>
          ) : (
            'Upload your photo'
          )}
        </div>
      </div>
      <Button type='submit' disabled={!isValid}>
        Sign up
      </Button>
    </form>
  );
};
