import LoginIcon from "./Icons/Login";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex w-full items-center justify-around bg-stone-950 px-4 py-4 sm:px-6">
      <Link to='/'>
        <h1 className=" text-center text-xl font-bold tracking-normal text-slate-50 sm:text-2xl lg:text-3xl">
          Express <br />
          <span className=" bg-slate-50 text-stone-950">
            Tru<span className="text-blue-700">ck</span>
          </span>
        </h1>
      </Link>

 

      <LoginIcon />
    </header>
  );
}
