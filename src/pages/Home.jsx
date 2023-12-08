import Card from "../ui/Card";
import Banner from "../features/home/Banner";
import Slide from "../ui/Slide";
import Trucks from "../ui/Trucks";
import Form from "../features/budget/Form";
import Feature from "../features/home/Feature";
import User from "../ui/Icons/User";
import TermsIcon from "../ui/Icons/TermsIcon";
import HandShake from "../ui/Icons/HandShake";
import Truck from '../ui/Icons/Truck';

export default function Home() {
  return (
    <div>
      <Banner />
      <section className=" grid grid-cols-1  lg:flex lg:flex-row lg:items-center lg:justify-around lg:gap-0  ">
        <Card image={<User />} name="Área Cliente" route="/account/login" />
        <Card image={<TermsIcon main={true} />} name="Termos" route="/terms" />
        <Card image={<Truck main={true} />} name="Quem somos" route="/about" />
        <Card image={<HandShake />} name="Parceiros" route="/partners" />
      </section>
      <Trucks />
      <Slide textElement={<p>Os mais rápidos e experientes do mercado</p>} />
      <Feature />
      <Form />
    </div>
  );
}
