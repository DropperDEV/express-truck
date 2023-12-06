/* eslint-disable react/prop-types */


export default function Button({ text, login, maxWidth, action }) {
  if (login === true)
    return (
      
        <button  type="submit" onClick={action}>{text}</button>
    );
  if (maxWidth === true)
    return (
      <button className="rounded-2xl bg-violet-1000 px-7 py-2 text-2xl text-slate-50   lg:px-14 lg:py-3">
        {text}
      </button>
    );
  return (
    <button className="rounded-2xl bg-violet-1000 px-10 py-4 text-slate-50">
      {text}
    </button>
  );
}
