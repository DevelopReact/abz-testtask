import * as yup from 'yup';

// Максимальний розмір файлу в байтах (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Дозволені формати зображення
const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg'];

export const photoValidationSchemas = yup.object().shape({
  photo: yup
    .mixed<File>()
    .required('*')
    .test(
      'fileSize',
      'File too large',
      (value) => value === null || (value && value.size <= MAX_FILE_SIZE)
    )
    .test(
      'fileFormat',
      'Unsupported file type',
      (value) =>
        value === null || (value && SUPPORTED_FORMATS.includes(value.type))
    )
});
