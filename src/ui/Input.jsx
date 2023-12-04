/* eslint-disable react/prop-types */

export default function Input({ inputType, text, value, action, type }) {
  if (inputType === "big")
    return (
      <textarea
        className="resize-none bg-gray-1000"
        cols="25"
        rows="5"
      ></textarea>
    );
  if (inputType === "Login/Register")
    return (
      <input
        type={type}
        className="w-fit rounded-lg bg-slate-50 px-2  py-2 text-sm focus:outline-none sm:px-6 sm:py-3 sm:text-lg lg:px-14    lg:py-8 lg:text-2xl"
        placeholder={text}
        value={value}
        onChange={action}
      />
    );
  if (inputType === "maWidth")
    return (
      <input
        type="text"
        className="w-fit rounded-lg bg-gray-1000  md:px-24 px-14  py-3  focus:outline-none  "
        placeholder={text}
      />
    );
  return (
    <input
      type="text"
      placeholder={text}
      className="w-fit bg-gray-1000 px-8 py-3"
    />
  );
}
