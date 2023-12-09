/* eslint-disable react/prop-types */

export default function Button({ text, login, maxWidth, action }) {
  if (login === true)
    return (
      <button
        type="submit"
        onClick={action}
        className="rounded-2xl bg-slate-50 py-2 px-5 text-stone-950 text-sm"
      >
        {text}
      </button>
    );
  if (maxWidth === true)
    return (
      <button className="rounded-2xl bg-violet-1000 px-7 py-2 text-2xl text-slate-50   lg:px-14 lg:py-3">
        {text}
      </button>
    );
  return (
    <button className="w-fit rounded-2xl bg-violet-1000 px-10 py-4 text-slate-50">
      {text}
    </button>
  );
}
