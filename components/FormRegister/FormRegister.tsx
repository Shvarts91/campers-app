'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import * as yup from 'yup';
import toast from 'react-hot-toast';

import formRegisterSchema from '@/lib/validation/formRegisterSchema';

import styles from './FormRegister.module.css';
import { bookCar } from '@/lib/api/queries';

export interface FormRegisterData {
  name: string;
  email: string;
  bookingDate: string;
  comment: string;
}

type FormErrors = Partial<Record<keyof FormRegisterData, string>>;

interface FormRegisterProps {
  carId: string;
}

export default function FormRegister({ carId }: FormRegisterProps) {
  const [errors, setErrors] = useState<FormErrors>({});

  const mutation = useMutation({
    mutationFn: (data: FormRegisterData) => bookCar(carId, data),
    onSuccess: () => {
      toast.success('Car successfully booked');
    },
    onError: () => {
      toast.error('Booking failed');
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data: FormRegisterData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      bookingDate: formData.get('bookingDate') as string,
      comment: formData.get('comment') as string,
    };

    try {
      await formRegisterSchema.validate(data, { abortEarly: false });

      setErrors({});

      mutation.mutate(data);

      form.reset();
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const formErrors: FormErrors = {};

        err.inner.forEach((error) => {
          if (error.path && !formErrors[error.path as keyof FormRegisterData]) {
            formErrors[error.path as keyof FormRegisterData] = error.message;
          }
        });

        setErrors(formErrors);

        err.errors.forEach((message) => {
          toast.error(message);
        });
      }
    }
  };

  return (
    <form className={styles.formRegister} onSubmit={handleSubmit}>
      <div className={styles.headerFormBlock}>
        <h3 className={styles.headerFormBlockTitle}>Book your campervan now</h3>
        <p className={styles.headerFormBlockSubTitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <div className={styles.inputsBlock}>
        <div>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Name*"
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email*"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            type="text"
            name="bookingDate"
            placeholder="Date*"
          />
          {errors.bookingDate && <p>{errors.bookingDate}</p>}
        </div>

        <div>
          <textarea
            className={styles.textArea}
            name="comment"
            placeholder="Comment"
          />
        </div>
      </div>

      <button
        className={styles.button}
        type="submit"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Booking...' : 'Send'}
      </button>
    </form>
  );
}
