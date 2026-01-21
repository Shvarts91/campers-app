import * as yup from 'yup';

const formRegisterSchema = yup.object({
  name: yup.string().trim().required('Name is required'),

  email: yup
    .string()
    .trim()
    .email('Invalid email format')
    .required('Email is required'),

  bookingDate: yup
    .string()
    .required('Booking date is required')
    .test('not-in-past', 'Booking date cannot be in the past', (value) => {
      if (!value) return false;

      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return selectedDate >= today;
    }),

  comment: yup.string().trim().optional(),
});

export default formRegisterSchema;
