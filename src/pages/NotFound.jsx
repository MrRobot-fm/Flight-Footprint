import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styled/style';

const NotFound = () => {
  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} w-full h-[calc(100vh-9rem)] flex text-primary dark:text-greySection `}
    >
      <div
        className={`${styles.boxWidth} flex flex-col items-center justify-center`}
      >
        <h1 className="font-bold text-[2.8rem]">Page not found!</h1>
        <p className={`${styles.paragraph}`}>The current page is not found!</p>

        <p className={`${styles.paragraph}`}>
          Go to the{' '}
          <Link to="/" className="underline">
            Homepage
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
