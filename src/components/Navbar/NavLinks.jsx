import React from 'react';
import NavLink from '../../atoms/Navbar/NavLink';

const NavLinks = ({ location }) => {
  return (
    <>
      <ul className="list-none md:flex hidden justify-around items-center flex-[0.5]  font-medium">
        <NavLink
          location={location}
          path="/features"
          linkTo="/features"
          linkText="Features"
        />
        <NavLink
          location={location}
          path="/search-footprint"
          linkTo="/search-footprint"
          linkText="Footprint"
        />
        <NavLink
          location={location}
          path="/contact-me"
          linkTo="/contact-me"
          linkText="Contact me"
        />
      </ul>
    </>
  );
};

export default NavLinks;
