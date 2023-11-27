/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function TextEscape({ text, route }) {
  return (
    <Link to={route}>
      <p className="mt-4 text-center text-slate-50   text-lg font-semibold">{text} </p>
    </Link>
  );
}
