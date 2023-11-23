/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function FooterMenu({ children }) {
  return (
    <Link className=" flex items-center justify-center bg-blue-1000 uppercase">
      {children}
    </Link>
  );
}
