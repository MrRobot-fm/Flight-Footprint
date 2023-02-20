import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ location, path, linkTo, linkText }) => {
  return (
    <>
      <li className="cursor-pointer text-[2rem] md:text-[1.2rem] hover:text-tertiary hover:-translate-y-1 active:translate-y-0  transition ease-in-out duration-500">
        {location.pathname === path ? (
          <Link to="/">Home</Link>
        ) : (
          <Link to={linkTo}>{linkText}</Link>
        )}
      </li>
    </>
  );
};

export default NavLink;
