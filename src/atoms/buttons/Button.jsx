const Button = ({ text, type, link }) => {
  return (
    <>
      <button
        className="px-4 py-2 tracking-wide text-white  transform bg-blue-500/90  rounded-md hover:bg-blue-600 hover:-translate-y-1 active:translate-y-0 ease-in-out duration-700 shadow-lg dark:shadow-md dark:shadow-slate-700"
        type={type}
      >
        {link ? <a href={link}>{text}</a> : text}
      </button>
    </>
  );
};

export default Button;
