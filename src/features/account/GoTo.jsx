/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function GoTo({ text, route }) {
  return (
    <Link to={route} className="sm:mt-4">
      <p className=" text-center text-sm   font-semibold text-slate-50">
        {text}
      </p>
    </Link>
  );
}
