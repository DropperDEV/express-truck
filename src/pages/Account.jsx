
import AccountMain from "../features/account/AccountMain";
import AccountNavigation from "../features/account/AccountNavigation";

export default function Account() {
  return (
    <main className="mb-32 flex flex-col items-center justify-center">
      <AccountNavigation/>
      <AccountMain />
    </main>
  );
}
