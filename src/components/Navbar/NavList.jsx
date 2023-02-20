import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineFileSearch,
  AiOutlineInfoCircle
} from 'react-icons/ai';
import NavLinkSidebar from '../../atoms/Navbar/NavLinkSidebar';

const NavList = ({ setToggle }) => {
  return (
    <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] landscape:top-[60%] left-[50%] w-full flex flex-col justify-center items-start gap-2">
      <ul className="flex flex-col items-start gap-10 landscape:gap-2  list-none text-center font-normal w-full pl-16">
        <NavLinkSidebar
          icon={<AiOutlineHome />}
          linkText="Home"
          linkTo="/"
          setToggle={setToggle}
        />
        <NavLinkSidebar
          icon={<AiOutlineInfoCircle />}
          linkText="Features"
          linkTo="/features"
          setToggle={setToggle}
        />
        <NavLinkSidebar
          icon={<AiOutlineFileSearch />}
          linkText="Footprint"
          linkTo="/search-footprint"
          setToggle={setToggle}
        />
        <NavLinkSidebar
          icon={<AiOutlineContacts />}
          linkText="Contact me"
          linkTo="/contact-me"
          setToggle={setToggle}
        />
      </ul>
    </div>
  );
};

export default NavList;
