import { Link } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineFileSearch,
  AiOutlineInfoCircle
} from 'react-icons/ai';

const NavList = ({ setToggle }) => {
  return (
    <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] landscape:top-[60%] left-[50%] w-full flex flex-col justify-center items-start gap-2">
      <ul className="flex flex-col items-start gap-10 landscape:gap-2  list-none text-center font-normal w-full pl-16">
        <li className="cursor-pointer sm:text-[2.3rem] text-[1.7rem]  hover:text-tertiary hover:-translate-y-1 active:translate-y-0  transition-transform ease-in-out duration-500">
          <Link
            to="/"
            onClick={() => setToggle(prev => !prev)}
            className="flex items-center gap-3"
          >
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li className="cursor-pointer sm:text-[2.3rem] text-[1.7rem] hover:text-tertiary hover:-translate-y-1 active:translate-y-0   transition-transform ease-in-out duration-500 ">
          <Link
            to="/features"
            onClick={() => setToggle(prev => !prev)}
            className="flex items-center gap-3"
          >
            <AiOutlineInfoCircle /> Features
          </Link>
        </li>
        <li className="cursor-pointer sm:text-[2.3rem] text-[1.7rem] hover:text-tertiary hover:-translate-y-1 active:translate-y-0  transition-transform ease-in-out duration-500 ">
          <Link
            to="/search-footprint"
            onClick={() => setToggle(prev => !prev)}
            className="flex items-center gap-3"
          >
            <AiOutlineFileSearch /> Footprint
          </Link>
        </li>
        <li className="cursor-pointer sm:text-[2.3rem] text-[1.7rem] hover:text-tertiary hover:-translate-y-1 active:translate-y-0  transition-transform ease-in-out duration-500">
          <Link
            to="/contact-me"
            onClick={() => setToggle(prev => !prev)}
            className="flex items-center gap-3"
          >
            <AiOutlineContacts /> Contact me
          </Link>
        </li>
      </ul>
      {/* <div className={toggle ? 'flex w-1/2 justify-start' : 'hidden'}>
        <SocialList />
      </div> */}
    </div>
  );
};

export default NavList;
