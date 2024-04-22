/* eslint-disable react/prop-types */


const Placeholder1 = ({ label, placeholder,type,onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      <input onChange={onChange} 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id={label} 
        type={type} 
        placeholder={placeholder} 
      />
    </div>
  );
};

export default Placeholder1;
