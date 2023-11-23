import LoginIcon from "./Icons/Login";

export default function Header() {
  return (
    <header className="flex items-center justify-around bg-stone-950 px-4 py-4 sm:px-6 w-full">
      <h1 className=" text-center text-xl font-bold tracking-normal text-slate-50 sm:text-2xl lg:text-3xl">
        Express <br />
        <span className=" bg-slate-50 text-stone-950">
          Tru<span className="text-blue-700">ck</span>
        </span>
      </h1>

      <div>
        {" "}
        <input
          placeholder="Search..."
          className=" w-32 rounded-full px-3 py-3 text-sm  transition-all duration-700  focus:outline-none focus:ring-4
          focus:ring-blue-400 focus:ring-opacity-50 sm:w-44 sm:px-5  sm:py-4 sm:text-base sm:focus:w-72 lg:w-60 lg:focus:w-80 2xl:w-80 2xl:focus:w-96"
        />
      </div>

      <LoginIcon />
    </header>
  );
}
