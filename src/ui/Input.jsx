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
  if (inputType === "Login/Register") return <input type="text" className="w-fit bg-slate-50 p-5 focus:outline-none  text-xl rounded-lg" placeholder={text}  />
    return <input type="text" className="w-fit bg-gray-1000 px-8 py-3" />;
}
