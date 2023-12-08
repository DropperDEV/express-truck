import Banner from "../features/home/Banner";
import Slide from "../ui/Slide";
import Trucks from "../ui/Trucks";
import Form from "../features/budget/Form";
import Feature from "../features/home/Feature";
import HomeNavigation from "../features/home/HomeNavigation";


export default function Home() {
  return (
    <div>
      <Banner />
      <HomeNavigation/>  
      <Trucks />
      <Slide textElement={<p>Os mais rápidos e experientes do mercado</p>} />
      <Feature />
      <Form />
    </div>
  );
}
