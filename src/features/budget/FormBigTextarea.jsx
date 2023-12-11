/* eslint-disable react/prop-types */
export default function FormBigTextarea({ value, name, type,action }) {
  return (
    <textarea
      className="resize-none bg-gray-1000"
      cols="25"
      rows="5"
      value={value}
      type={type}
      name={name}
      onChange={action}
    ></textarea>
  );
}
