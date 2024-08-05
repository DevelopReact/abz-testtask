// react
import { FC, useEffect } from 'react';
//api
import { useGetPositionsQuery } from '../../api/positionAPI';
//ui
import { Error, Loader, RadioButton } from '@/shared/ui';
// styles
import styles from './PositionsList.module.scss';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface PositionsListProps {
  selectedPosition: string;
  setSelectedPosition: (selectedPosition: string) => void;
  setValue: UseFormSetValue<FieldValues>;
  register: UseFormRegister<FieldValues>;
}

export const PositionsList: FC<PositionsListProps> = ({
  selectedPosition,
  setSelectedPosition,
  setValue,
  register
}) => {
  const { data, isFetching, isLoading, isError } = useGetPositionsQuery();

  useEffect(() => {
    register('position_id', { required: true });
  }, [register]);

  const handlePositionChange = (position_id: number, position: string) => {
    setSelectedPosition(position);
    setValue('position_id', position_id, { shouldValidate: true });
  };

  if (isFetching || isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className={styles.PositionsList}>
      <p>Select your position</p>
      {data &&
        data.map(({ id, name }) => (
          <RadioButton
            key={id}
            checked={selectedPosition === name}
            onChange={() => handlePositionChange(id!, name)}
            label={name}
          />
        ))}
    </div>
  );
};
