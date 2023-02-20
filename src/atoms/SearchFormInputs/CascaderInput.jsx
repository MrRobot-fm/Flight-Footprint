import { Cascader } from 'antd';

const CascaderInput = ({
  optionsData,
  handleChange,
  setValue,
  errors,
  margin,
  label
}) => {
  return (
    <div className={`flex flex-col ${margin}`}>
      <label htmlFor="from" className="block text-[1.1rem] font-medium">
        {label}:
      </label>
      <Cascader
        options={optionsData}
        onChange={value => handleChange(value, setValue)}
        placeholder="Passenger"
        style={{ width: 120 }}
        className="shadow-md dark:shadow-slate-600"
      />
    </div>
  );
};

export default CascaderInput;
