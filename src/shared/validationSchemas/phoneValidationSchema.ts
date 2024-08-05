import * as yup from 'yup';

// eslint-disable-next-line no-useless-escape
const phonePattern = /^[\+]{0,1}380([0-9]{9})$/;

export const phoneValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(phonePattern, 'the number must contain 10 characters')
    .required('*')
});
