const ContactTextArea = ({ name, label, type, register, field }) => {
  return (
    <>
      <label htmlFor={name} className="block text-[1.1rem] font-medium  mr-2">
        {label}:
      </label>
      <div className="flex  w-full">
        <textarea
          type={type}
          name={name}
          className="block w-full h-[3rem] mt-1 border-gray-300 dark:border-blue-500 dark:border-[2px] border-[1px] rounded-md shadow-md dark:shadow-slate-700 outline-none px-4 py-2 dark:text-secondary"
          // required={true}
          {...register(field, { required: true, maxLength: 200 })}
        />
      </div>
    </>
  );
};

export default ContactTextArea;
