import * as yup from 'yup';

export const positionIdValidationSchema = yup.object().shape({
  positionId: yup
    .number()
    .min(1, 'position_id number must contain min 1 symbol')
    .required('*')
});
