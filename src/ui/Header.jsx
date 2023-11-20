import LoginIcon from "./../features/account/LoginIcon";

export default function Header() {
  return (
    <header className="flex items-center justify-around bg-stone-950 px-4 py-4 sm:px-6">
      <h1 className=" text-center text-xl font-bold tracking-normal  text-slate-50">
        Express <br />
        <span className=" bg-slate-50 text-stone-950">
          Tru<span className="text-blue-700">ck</span>
        </span>
      </h1>

      <div>
        {" "}
        <input
          placeholder="Search..."
          className=" w-32 rounded-full px-3 py-2  text-sm sm:px-8 sm:py-5"
        />
      </div>

      <LoginIcon />
    </header>
  );
}
