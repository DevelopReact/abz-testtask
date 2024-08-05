//lib
import { emailValidationSchema } from '@/shared/validationSchemas/emailValidationSchema';
import { nameValidationSchema } from '@/shared/validationSchemas/nameValidationSchema';
import { phoneValidationSchema } from '@/shared/validationSchemas/phoneValidationSchema';
import { photoValidationSchemas } from '@/shared/validationSchemas/photoValidationSchema';
import { positionIdValidationSchema } from '@/shared/validationSchemas/positionIdValidationSchema';
import * as yup from 'yup';
// validation schemas

export const userFormValidationSchema = yup.object().shape({
  name: nameValidationSchema.fields.name,
  email: emailValidationSchema.fields.email,
  phone: phoneValidationSchema.fields.phone,
  position_id: positionIdValidationSchema.fields.positionId,
  photo: photoValidationSchemas.fields.photo
});
