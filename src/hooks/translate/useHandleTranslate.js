import { useEffect } from 'react';

export const useHandleTranslate = () => {
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

  return { googleTranslateElementInit };
};
