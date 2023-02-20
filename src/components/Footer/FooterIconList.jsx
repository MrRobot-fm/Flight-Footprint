import {
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiFramer
} from 'react-icons/si';
import FooterIcon from '../../atoms/FooterIcon/FooterIcon';

const FooterIconList = () => {
  return (
    <div className="flex-[0.3] flex-wrap sm:w-[60%] w-[80%] flex md:flex-row flex-col items-center justify-center gap-[1.4rem] ">
      <p className="text-center ss:text-[1rem] text-[1rem]">Created whit: </p>
      <div className="flex gap-[1.2rem]">
        <FooterIcon
          icon={
            <SiReact className="hover:text-[#61dafb] ease-in-out duration-500 text-[1.8rem]" />
          }
          tooltipText="React JS"
        />
        <FooterIcon
          icon={
            <SiReactrouter className="hover:text-red-400 ease-in-out duration-500 text-[1.9rem]" />
          }
          tooltipText="React Router"
        />
        <FooterIcon
          icon={
            <SiTailwindcss className="hover:text-[#0ea5e9] ease-in-out duration-500 text-[1.8rem]" />
          }
          tooltipText="Tailwind Css"
        />
        <FooterIcon
          icon={
            <SiFramer className="hover:text-[#dd22cc] ease-in-out duration-500 text-[1.6rem]" />
          }
          tooltipText="Framer Motion"
        />
      </div>
    </div>
  );
};

export default FooterIconList;
