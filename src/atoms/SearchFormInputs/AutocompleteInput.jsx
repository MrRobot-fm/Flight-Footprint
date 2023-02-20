import React from 'react';
import { AutoComplete } from 'antd';

const AutocompleteInput = ({
  handleOnSearchAndClear,
  handleOnSelect,
  setQuery,
  setValue,
  code,
  flightCode,
  label
}) => {
  return (
    <>
      <label htmlFor="from" className="block text-[1.1rem] font-medium">
        {label}:
      </label>

      <AutoComplete
        options={flightCode}
        className="shadow-md dark:shadow-slate-600"
        onSearch={value =>
          handleOnSearchAndClear(value, setQuery, setValue, code)
        }
        onSelect={value => handleOnSelect(value, setValue, code)}
        onClear={value =>
          handleOnSearchAndClear(value, setQuery, setValue, code)
        }
        filterOption={false}
        allowClear={true}
        placeholder="From"
      />
    </>
  );
};

export default AutocompleteInput;
