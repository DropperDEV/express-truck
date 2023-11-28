/* eslint-disable react/prop-types */

export default function Button({ text, login, maxWidth }) {
  if (login === true)
    return (
      <button className="rounded-2xl bg-slate-50 lg:px-10 lg:py-4 px-1 py-2   text-2xl text-stone-950">
        {text}
      </button>
    );
    if (maxWidth === true)
    return (
      <button className="rounded-2xl bg-violet-1000 lg:px-14 lg:py-3 px-7 py-2   text-2xl text-slate-50">
        {text}
      </button>
    );
  return (
    <button className="rounded-2xl bg-violet-1000 px-10 py-4 text-slate-50">
      {text}
    </button>
  );
}
