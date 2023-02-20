const ContactInput = ({ label, type, name, register, field, emailPattern }) => {
  return (
    <>
      <label htmlFor={name} className="block text-[1.1rem] font-medium  mr-2">
        {label}:
      </label>
      <div className="flex w-full">
        <input
          type={type}
          name={name}
          className="block w-full h-[3rem] mt-1 dark:text-secondary  rounded-md shadow-md dark:shadow-slate-700 outline-none px-4 py-2 border-gray-300 dark:border-blue-500 dark:border-[2px] border-[1px] "
          {...register(field, {
            required: true,
            maxLength: 30,
            pattern: emailPattern
          })}
        />
      </div>
    </>
  );
};

export default ContactInput;
