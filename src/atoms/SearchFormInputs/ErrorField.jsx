import React from 'react';

const ErrorField = ({ errorsCode, validation, fieldText }) => {
  return (
    <>
      {errorsCode?.type === validation && (
        <p className="text-red-500 text-sm">{fieldText}</p>
      )}
    </>
  );
};

export default ErrorField;
