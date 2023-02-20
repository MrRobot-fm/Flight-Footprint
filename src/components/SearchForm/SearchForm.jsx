import './searchForm.css';
import { personData, flightClassData } from '../../data/flightData';
import { useHandleSearchInputs } from '../../hooks/searchForm/useHandleSearchInputs';
import AutocompleteInput from '../../atoms/SearchFormInputs/AutocompleteInput';
import CascaderInput from '../../atoms/SearchFormInputs/CascaderInput';
import Button from '../../atoms/buttons/Button';
import ErrorField from '../../atoms/SearchFormInputs/ErrorField';
import Spinner from '../../atoms/Spinner/Spinner';

const SearchForm = ({
  handleFootprint,
  handleSubmit,
  setValue,
  errors,
  flightCodeFrom,
  flightCodeTo,
  setQueryFrom,
  setQueryTo,
  loadingFrom,
  loadingTo
}) => {
  const {
    handleOnSearchAndClear,
    handleOnSelect,
    handleChangePassenger,
    handleChangeClass
  } = useHandleSearchInputs();
  console.log(loadingFrom);
  return (
    <form
      onSubmit={handleSubmit(handleFootprint)}
      className="flex flex-col items-start w-full"
    >
      <div className="flex flex-col py-1 w-full xxs:w-[90%] xs:w-[70%] sm:w-[60%] md:w-[90%] lg:w-[60%] ">
        <AutocompleteInput
          handleOnSearchAndClear={handleOnSearchAndClear}
          handleOnSelect={handleOnSelect}
          setQuery={setQueryFrom}
          setValue={setValue}
          code="codeFrom"
          flightCode={flightCodeFrom}
          label="From"
          loading={loadingFrom}
        />

        <ErrorField
          errorsCode={errors.codeFrom}
          validation="required"
          fieldText="Fields is required"
        />
        <ErrorField
          errorsCode={errors.codeFrom}
          validation="pattern"
          fieldText="Fields required only letters"
        />
      </div>

      <div className="flex flex-col py-1 w-full xxs:w-[90%] xs:w-[70%] sm:w-[60%] md:w-[90%] lg:w-[60%]">
        <AutocompleteInput
          handleOnSearchAndClear={handleOnSearchAndClear}
          handleOnSelect={handleOnSelect}
          setQuery={setQueryTo}
          setValue={setValue}
          code="codeTo"
          flightCode={flightCodeTo}
          label="To"
          loading={loadingTo}
        />
        <ErrorField
          errorsCode={errors.codeTo}
          validation="required"
          fieldText="Fields is required"
        />
        <ErrorField
          errorsCode={errors.codeTo}
          validation="pattern"
          fieldText="Fields required only letters"
        />
      </div>
      <div className="flex flex-row justify-start center py-1">
        <div>
          <CascaderInput
            optionsData={personData}
            handleChange={handleChangePassenger}
            setValue={setValue}
            margin="mr-8"
            label="Passengers"
          />
          <ErrorField
            errorsCode={errors.passenger}
            validation="required"
            fieldText="Fields is required"
          />
        </div>
        <div>
          <CascaderInput
            optionsData={flightClassData}
            handleChange={handleChangeClass}
            setValue={setValue}
            margin="mr-0"
            label="Class"
          />
          <ErrorField
            errorsCode={errors.flightClass}
            validation="required"
            fieldText="Fields is required"
          />
        </div>
      </div>

      <div className="flex mt-4 w-full items-center">
        <Button text="Get your footprint" type="submit" />
        {(loadingFrom || loadingTo) && (
          <div className="ml-5">
            <Spinner />
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchForm;
