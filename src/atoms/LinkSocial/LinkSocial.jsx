import React from 'react';

const LinkSocial = ({ icon, url, hoverColor }) => {
  return (
    <>
      <li className="hover:-translate-y-2 active:translate-y-0 ease-in-out duration-700">
        <a
          href={url}
          target="blank"
          className={`hover:${hoverColor} ease-in-out duration-700`}
        >
          {icon}
        </a>
      </li>
    </>
  );
};

export default LinkSocial;
