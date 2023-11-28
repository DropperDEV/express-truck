/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function TextEscape({ text, route }) {
  return (
    <Link to={route} className="sm:mt-4">
      <p className=" text-center text-base sm:text-lg   font-semibold text-slate-50">
        {text}{" "}
      </p>
    </Link>
  );
}
