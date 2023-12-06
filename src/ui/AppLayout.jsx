import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(isLoading)
  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <main className=" mx-auto  ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
