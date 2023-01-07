import React, { useEffect } from 'react';
import { TfiWorld } from 'react-icons/tfi';
import { Tooltip } from 'antd';
import './translate.css';

const Translate = ({ toggle }) => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'it,fr,en,nl,pt,es,de,el,zh-CN,ja',
        layout: window.google.translate.TranslateElement.InlineLayout.BUTTON
      },
      'google_translate_element'
    );
  };

  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div
      className={
        toggle
          ? 'invisible flex flex-row justify-center md:mt-0 mt-3 md:mr-0 ml-4'
          : 'visible flex flex-row justify-center md:mt-0 mt-3 md:mr-0 ml-4'
      }
    >
      <Tooltip
        placement="bottom"
        title={<span>Translate</span>}
        arrowPointAtCenter={true}
        mouseEnterDelay={0.4}
        color="bg-white"
      >
        <TfiWorld
          className="mr-2 md:text-[1.7rem] text-[1.9rem] "
          strokeWidth="0.2px"
        />
      </Tooltip>
      <div
        id="google_translate_element"
        className="w-[1.8rem] h-[1.6rem]"
      ></div>
    </div>
  );
};

export default Translate;
