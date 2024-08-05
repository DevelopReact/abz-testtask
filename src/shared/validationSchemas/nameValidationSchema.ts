import * as yup from 'yup';

const tooShortMessage = 'min length — ${min} symbol';
const tooLongMessage = 'max length — ${max} symbol';

export const nameValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, tooShortMessage)
    .max(60, tooLongMessage)
    .required('*')
});
