import emailjs from '@emailjs/browser';
import { ToastSuccess } from '../../components';
import { ToastError } from '../../components';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

export const useHandleContactForm = () => {
  const [emailSended, setEmailSended] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const patternEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const sendEmail = e => {
    emailjs
      .sendForm(
        'service_dvwh9g2',
        'template_q2knal8',
        form.current,
        '31NmIPC3WrRZQ4D4B'
      )
      .then(
        () => {
          setEmailSended(true);
          ToastSuccess('Sended');
          setTimeout(() => {
            setEmailSended(false);
          }, 3000);
        },
        error => {
          setEmailSended(false);
          ToastError(error);
        }
      );

    form.current.reset();
  };

  return {
    form,
    sendEmail,
    emailSended,
    register,
    handleSubmit,
    errors,
    patternEmail
  };
};
