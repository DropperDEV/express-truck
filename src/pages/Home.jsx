import Banner from "../features/home/Banner";
import Slide from "../ui/Slide";
import Trucks from "../ui/Trucks";
import Form from "../features/budget/Form";
import Feature from "../features/home/Feature";
import HomeNavigation from "../features/home/HomeNavigation";
import { Helmet } from "react-helmet";


export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <HomeNavigation/>  
      <Trucks />
      <Slide textElement={<p>Os mais rápidos e experientes do mercado</p>} />
      <Feature />
      <Form />
    </div>
  );
}
