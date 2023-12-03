/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function Button({ text, login, maxWidth, route }) {
  if (login === true)
    return (
      <Link
        to={route}
        className="rounded-2xl bg-slate-50 px-1 py-2 text-2xl text-stone-950 text-center   lg:px-10 lg:py-4"
      >
        {text}
      </Link>
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
