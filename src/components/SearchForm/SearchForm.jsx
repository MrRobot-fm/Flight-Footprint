import { useEffect, useState } from 'react';
import './searchForm.css';
import { AutoComplete } from 'antd';
import { Cascader } from 'antd';
import { personData, flightClassData } from '../../data/flightData';
import { apiAirportCode } from './../../utils/apiAirportCode';

const SearchForm = ({
  handleFootprint,
  register,
  handleSubmit,
  setValue,
  errors
}) => {
  const [flightCodeFrom, setFlightCodeFrom] = useState([]);
  const [flightCodeTo, setFlightCodeTo] = useState([]);
  const [queryFrom, setQueryFrom] = useState('');
  const [queryTo, setQueryTo] = useState('');

  useEffect(() => {
    const regExp = /[a-zA-Z]/g;

    if (regExp.test(queryFrom)) {
      apiAirportCode(queryFrom, setFlightCodeFrom);
    }

    if (regExp.test(queryTo)) {
      apiAirportCode(queryTo, setFlightCodeTo);
    }

    register('codeFrom', { required: true, pattern: /[A-Za-z]/ });
    register('codeTo', { required: true, pattern: /[A-Za-z]/ });
    register('passenger', { required: true });
    register('flightClass', { required: true });
  }, [queryFrom, queryTo, register]);

  return (
    <form
      onSubmit={handleSubmit(handleFootprint)}
      className="flex flex-col items-start w-full"
    >
      <div className="flex flex-col py-1 w-full xxs:w-[90%] xs:w-[70%] sm:w-[60%] md:w-[90%] lg:w-[60%] ">
        <label htmlFor="from" className="block text-[1.1rem] font-medium">
          From:
        </label>

        <AutoComplete
          options={flightCodeFrom}
          className="shadow-md dark:shadow-slate-600"
          onSearch={value => {
            setQueryFrom(value);
            setValue('codeFrom', value);
          }}
          onSelect={value => {
            setValue('codeFrom', value?.substr(0, 3));
          }}
          onClear={value => {
            setValue('codeFrom', value);
          }}
          filterOption={false}
          allowClear={true}
          placeholder="From"
        />

        {errors.codeFrom?.type === 'required' && (
          <p className="text-red-500 text-sm">Fields is required</p>
        )}
        {errors.codeFrom?.type === 'pattern' && (
          <p className="text-red-500 text-sm">Fields required only letters</p>
        )}
      </div>

      <div className="flex flex-col py-1 w-full xxs:w-[90%] xs:w-[70%] sm:w-[60%] md:w-[90%] lg:w-[60%]">
        <label htmlFor="from" className="block text-[1.1rem] font-medium">
          To:
        </label>
        <AutoComplete
          options={flightCodeTo}
          className="shadow-md dark:shadow-slate-600"
          onSearch={value => {
            setQueryTo(value);
            setValue('codeTo', value);
          }}
          onSelect={value => {
            setValue('codeTo', value?.substr(0, 3));
          }}
          onClear={value => {
            setValue('codeTo', value);
          }}
          filterOption={false}
          allowClear={true}
          placeholder="To"
        />
        {errors.codeTo?.type === 'required' && (
          <p className="text-red-500 text-sm">Fields is required</p>
        )}
        {errors.codeTo?.type === 'pattern' && (
          <p className="text-red-500 text-sm">Fields required only letters</p>
        )}
      </div>
      <div className="flex flex-row justify-start center py-1">
        <div className="flex flex-col mr-8">
          <label htmlFor="from" className="block text-[1.1rem] font-medium">
            Passenger:
          </label>
          <Cascader
            options={personData}
            onChange={value => {
              if (value > 0) {
                setValue('passenger', ...value);
              } else {
                setValue('passenger', null);
              }
            }}
            placeholder="Passenger"
            style={{ width: 120 }}
            className="shadow-md dark:shadow-slate-600"
          />

          {errors.passenger?.type === 'required' && (
            <p className="text-red-500 text-sm">Fields is required</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="from" className="block text-[1.1rem] font-medium">
            Class:
          </label>
          <Cascader
            options={flightClassData}
            onChange={value => {
              if (value) {
                setValue('flightClass', ...value);
              } else {
                setValue('flightClass', value);
              }
            }}
            placeholder="Class"
            style={{ width: 120 }}
            className="shadow-md dark:shadow-slate-600"
          />
          {errors.flightClass?.type === 'required' && (
            <p className="text-red-500 text-sm">Fields is required</p>
          )}
        </div>
      </div>

      <div className="flex mt-4 ">
        <button
          className="px-4 py-2 tracking-wide text-white  transform bg-blue-500/90  rounded-md hover:bg-blue-600 hover:-translate-y-1 active:translate-y-0 ease-in-out duration-700 shadow-lg dark:shadow-md dark:shadow-slate-700"
          type="submit"
        >
          Get your footprint
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
