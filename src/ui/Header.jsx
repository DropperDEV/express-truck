import LoginIcon from "./../features/account/LoginIcon";

export default function Header() {
  return (
    <header className="flex items-center justify-around bg-pink-600 px-4 py-3 sm:px-6">
      <h1>Express Truck</h1>

      <div>
        {" "}
        <input placeholder="Search..." className="" />
      </div>

      <LoginIcon />
    </header>
  );
}
