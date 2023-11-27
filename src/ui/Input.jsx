/* eslint-disable react/prop-types */

export default function Input({ inputType, text }) {
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
        type="text"
        className="w-fit rounded-lg bg-slate-50 px-14 py-8  text-2xl focus:outline-none"
        placeholder={text}
      />
    );
  return <input type="text" className="w-fit bg-gray-1000 px-8 py-3" />;
}
