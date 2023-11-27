/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function Card({ image, name, route }) {
  return (
    <Link
      to={route}
      className=" my-20  flex w-52 flex-col  items-center justify-center gap-10  place-self-center  rounded-2xl bg-violet-1000 px-3 py-8 text-lg font-semibold text-slate-50 sm:px-8 sm:py-14 sm:text-xl md:px-8 md:py-20 md:text-2xl"
    >
      {image}
      <p>{name}</p>
    </Link>
  );
}
