import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useHandleSearchForm = (queryFrom, queryTo) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    register('codeFrom', { required: true, pattern: /[A-Za-z]/ });
    register('codeTo', { required: true, pattern: /[A-Za-z]/ });
    register('passenger', { required: true });
    register('flightClass', { required: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [register, queryFrom, queryTo]);

  return {
    queryFrom,
    queryTo,

    handleSubmit,
    setValue,
    errors,
    register
  };
};
