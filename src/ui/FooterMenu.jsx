/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function FooterMenu({children}) {
  return <Link className=" bg-blue-1000 uppercase text-lg flex items-center justify-center">{children}</Link>;
}
