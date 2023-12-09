/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function GoTo({ text, route }) {
  return (
    <Link to={route} className="sm:mt-2">
      <p className=" text-center lg:text-sm text-xs  font-semibold text-slate-50">
        {text}
      </p>
    </Link>
  );
}
