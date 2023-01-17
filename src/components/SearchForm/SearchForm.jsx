import React, { useEffect } from 'react';
import './searchForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { AutoComplete } from 'antd';
import { Cascader } from 'antd';
import {
  getAirportCode,
  handleChange
} from '../../features/airport/airportCodeSlice';
import {
  handleChangeCodeFrom,
  handleChangeCodeTo,
  getNumberOfPassenger,
  handleFlightClass,
  getFootprint
} from '../../features/footprint/footprintSlice';
import { personData, flightClassData } from '../../data/flightData';
import { apiFootOptions } from '../../utils/apiFootOptions';

const SearchForm = ({ activateScreen, setActive }) => {
  const { code, query } = useSelector(store => store.airportCode);

  const { queryCodeFrom, queryCodeTo, passenger, flightClass, footprint } =
    useSelector(store => store.footprint);

  const dispatch = useDispatch();

  useEffect(() => {
    if (query) {
      dispatch(getAirportCode(query));
    }
    if (!query) {
      return;
    }
  }, [dispatch, query]);

  useEffect(() => {
    if (footprint) {
      dispatch(
        getFootprint(
          apiFootOptions(queryCodeFrom, queryCodeTo, passenger, flightClass)
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, flightClass, passenger, queryCodeFrom, queryCodeTo]);

  const handleFootprint = e => {
    e.preventDefault();
    if (!queryCodeFrom || !queryCodeTo || !passenger || !flightClass) {
      return;
    } else {
      dispatch(
        getFootprint(
          apiFootOptions(queryCodeFrom, queryCodeTo, passenger, flightClass)
        )
      );
      activateScreen();
    }
  };

  return (
    <form
      onSubmit={handleFootprint}
      className="flex flex-col items-start w-full"
    >
      <div className="flex flex-col py-1 w-full xxs:w-[90%] xs:w-[70%] sm:w-[60%] md:w-[90%] lg:w-[60%] ">
        <label htmlFor="from" className="block text-[1.1rem] font-medium">
          From:
        </label>
        <AutoComplete
          name="from"
          options={code}
          className="shadow-md dark:shadow-slate-600"
          onSelect={value => {
            dispatch(handleChangeCodeFrom(value));
          }}
          onSearch={value => {
            dispatch(handleChange(value));
          }}
          onClear={() => {
            setActive(false);
            dispatch(handleChangeCodeFrom('FCO'));
          }}
          filterOption={false}
          allowClear={true}
          placeholder="From"
          required
        />
      </div>

      <div className="flex flex-col py-1 w-full xxs:w-[90%] xs:w-[70%] sm:w-[60%] md:w-[90%] lg:w-[60%]">
        <label htmlFor="from" className="block text-[1.1rem] font-medium">
          To:
        </label>
        <AutoComplete
          options={code}
          className="shadow-md dark:shadow-slate-600"
          onSelect={value => {
            dispatch(handleChangeCodeTo(value));
          }}
          onClear={() => {
            setActive(false);
            dispatch(handleChangeCodeTo('FCO'));
          }}
          onSearch={value => {
            dispatch(handleChange(value));
          }}
          filterOption={false}
          allowClear={true}
          placeholder="To"
          required
        />
      </div>
      <div className="flex flex-row justify-start center py-1">
        <div className="flex flex-col mr-8">
          <label htmlFor="from" className="block text-[1.1rem] font-medium">
            Passenger:
          </label>
          <Cascader
            options={personData}
            onChange={value => {
              if (!value) {
                value = [1];
                return;
              }

              dispatch(getNumberOfPassenger(...value));
            }}
            onClear={() => {
              setActive(false);
              dispatch(getNumberOfPassenger(0));
            }}
            placeholder="Passenger"
            style={{ width: 120 }}
            className="shadow-md dark:shadow-slate-600"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="from" className="block text-[1.1rem] font-medium">
            Class:
          </label>
          <Cascader
            options={flightClassData}
            onChange={value => {
              if (!value) {
                value = ['economy'];
                return;
              }
              dispatch(handleFlightClass(...value));
            }}
            onClear={value => {
              setActive(false);
              dispatch(handleFlightClass(''));
            }}
            placeholder="Class"
            style={{ width: 120 }}
            className="shadow-md dark:shadow-slate-600"
            required
          />
        </div>
      </div>

      <div className="flex  mt-4 ">
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
