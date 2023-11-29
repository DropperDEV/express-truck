import Card from "../../ui/Card";
import Banner from "./Banner";
import Slide from "../../ui/Slide";
import Trucks from "../../ui/Trucks";
import Form from "../budget/Form";
import Feature from "./Feature";
import User from "../../ui/Icons/User";
import TermsIcon from "../../ui/Icons/TermsIcon";
import HandShake from "./../../ui/Icons/HandShake";

export default function Home() {
  return (
    <div>
      <Banner />
      <section className=" grid grid-cols-1  md:flex md:flex-row md:items-center md:justify-around md:gap-0  ">
        <Card image={<User />} name="Área Cliente" route="/account/login" />
        <Card image={<TermsIcon />} name="Termos" route="/terms" />
        <Card image={<HandShake />} name="Parceiros" route="/partners" />
      </section>
      <Trucks />
      <Slide textElement={<p>Os mais rápidos e experientes do mercado</p>} />
      <Feature />
      <Form />
    </div>
  );
}
