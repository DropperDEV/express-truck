/* eslint-disable react/prop-types */

export default function Input({
  inputType,
  text,
  name,
  action,
  type,
  pattern,
}) {
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
        className="w-fit rounded-lg bg-slate-50 px-2  py-2 text-sm focus:outline-none sm:px-6 sm:py-3 sm:text-base lg:w-96 lg:py-5"
        placeholder={text}
        name={name}
        onChange={action}
        pattern={pattern}
      />
    );
  if (inputType === "maWidth")
    return (
      <input
        type="text"
        className="w-fit rounded-lg bg-gray-1000  px-14 py-3  focus:outline-none  md:px-24  "
        placeholder={text}
      />
    );
  return (
    <input
      type="text"
      placeholder={text}
      className="w-fit bg-gray-1000 sm:px-8 sm:py-2"
    />
  );
}
