// react
import { FC, useState } from 'react';
//ui
import { Input } from '@/shared/ui/Input';
import { RadioButton } from '@/shared/ui/RadioButton';
// styles
import styles from './UserForm.module.scss';
import { Button } from '@/shared/ui';

interface UserFormProps {}

export const UserForm: FC<UserFormProps> = ({}) => {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    const input = document.getElementById('fileInput') as HTMLInputElement;
    if (input) {
      input.click();
    }
  };

  const onSubmitFormClick = () => {};

  return (
    <div className={styles.UserForm}>
      <Input placeholder='Your name' />
      <Input placeholder='Email' />
      <div className={styles.phoneTextForm}>
        <Input placeholder='Phone' />
        <span>+38 (XXX) XXX - XX - XX</span>
      </div>
      <div className={styles.PositionSelects}>
        <p>Select your position</p>
        <RadioButton
          label='Frontend developer'
          checked={selectedPosition === 'frontend'}
          onChange={() => setSelectedPosition('frontend')}
        />
        <RadioButton
          label='Backend developer'
          checked={selectedPosition === 'backend'}
          onChange={() => setSelectedPosition('backend')}
        />
        <RadioButton
          label='Designer'
          checked={selectedPosition === 'designer'}
          onChange={() => setSelectedPosition('designer')}
        />
        <RadioButton
          label='QA'
          checked={selectedPosition === 'qa'}
          onChange={() => setSelectedPosition('qa')}
        />
      </div>
      <div className={styles.Photo}>
        <div className={styles.UploadButton}>Upload</div>
        <div className={styles.FileUpload} onClick={handleUploadClick}>
          <input id='fileInput' type='file' onChange={handleFileChange} />
          {selectedFile ? (
            <div className={styles.FileName}>{selectedFile.name}</div>
          ) : (
            'Upload your photo'
          )}
        </div>
      </div>
      <Button onClick={onSubmitFormClick} disabled>
        Sign up
      </Button>
    </div>
  );
};
