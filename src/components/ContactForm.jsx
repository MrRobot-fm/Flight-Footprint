import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastSuccess } from './ToastSuccess';
import { ToastError } from './ToastError';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_dvwh9g2',
        'template_q2knal8',
        form.current,
        '31NmIPC3WrRZQ4D4B'
      )
      .then(
        result => {
          console.log(result.text);
          console.log('inviato');
          ToastSuccess('Sended');
        },
        error => {
          console.log(error.text);
          ToastError('Error');
        }
      );

    form.current.reset();
  };

  return (
    <form
      className="flex flex-col md:items-start items-center xs:w-[80%] w-full"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="flex flex-col items-start w-[80%]">
        <label
          htmlFor="user_name"
          className="block text-[1.1rem] font-medium  mr-2"
        >
          Name:
        </label>
        <div className="flex w-full">
          <input
            type="text"
            name="user_name"
            className="block w-full h-[3rem] mt-1 dark:text-secondary  rounded-md shadow-md dark:shadow-slate-700 outline-none px-4 py-2 border-gray-300 dark:border-blue-500 dark:border-[2px] border-[1px] "
            required
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col items-start w-[80%]">
        <label
          htmlFor="user_email"
          className="block  text-[1.1rem] font-medium  mr-2"
        >
          Email:
        </label>
        <div className="flex w-full ">
          <input
            type="email"
            name="user_email"
            className="block w-full h-[3rem] mt-1 dark:text-secondary rounded-md shadow-md dark:shadow-slate-700 outline-none px-4 py-2 border-gray-300 dark:border-blue-500 dark:border-[2px] border-[1px]"
            required={true}
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col items-start w-[80%]">
        <label
          htmlFor="user_message"
          className="block text-[1.1rem] font-medium  mr-2"
        >
          Message:
        </label>
        <div className="flex  w-full">
          <textarea
            type="text"
            name="user_message"
            className="block w-full h-[3rem] mt-1 border-gray-300 dark:border-blue-500 dark:border-[2px] border-[1px] rounded-md shadow-md dark:shadow-slate-700 outline-none px-4 py-2 dark:text-secondary"
            required={true}
          />
        </div>
      </div>

      <div className="flex mt-6 ">
        <button
          className="w-full px-4 py-2 tracking-wide text-white shadow-lg dark:shadow-md dark:shadow-slate-700 transform bg-blue-500/90  rounded-md hover:bg-blue-600 hover:-translate-y-1 active:translate-y-0 ease-in-out duration-700 "
          type="submit"
        >
          Send email
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
