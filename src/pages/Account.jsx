
import { Helmet } from "react-helmet";
import AccountMain from "../features/account/AccountMain";
import AccountNavigation from "../features/account/AccountNavigation";

export default function Account() {
  return (
    <main className="mb-32 flex flex-col items-center justify-center">
      <Helmet>
        <title>Minha conta</title>
      </Helmet>
      <AccountNavigation/>
      <AccountMain />
    </main>
  );
}
