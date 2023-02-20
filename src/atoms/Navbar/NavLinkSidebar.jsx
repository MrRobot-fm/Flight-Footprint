import { Link } from 'react-router-dom';

const NavLinkSidebar = ({ icon, linkText, linkTo, setToggle }) => {
  return (
    <>
      <li className="cursor-pointer sm:text-[2.3rem] text-[1.7rem]  hover:text-tertiary hover:-translate-y-1 active:translate-y-0  transition-transform ease-in-out duration-500">
        <Link
          to={linkTo}
          onClick={() => setToggle(prev => !prev)}
          className="flex items-center gap-3"
        >
          {icon} {linkText}
        </Link>
      </li>
    </>
  );
};

export default NavLinkSidebar;
