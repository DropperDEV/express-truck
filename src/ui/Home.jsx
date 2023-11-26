import Card from "./Card";
import Banner from "./HomeComponents/Banner";
import Slide from "./Slide";
import Trucks from "./Trucks";
import  Form  from "../features/budget/Form";
import  Feature  from "./FeaturesComponents/Feature";


export default function Home() {
  return (
    <div>
      <Banner />
      <section className=" grid grid-cols-1  md:flex md:flex-row md:items-center md:justify-around md:gap-0  ">
        <Card image="user.png" altImage="Usuário" name="Área Cliente" route='/account/login' />
        <Card image="terms.jpg" altImage="Termos" name="Termos" route='/terms' />
        <Card image="partners.jpg" altImage="Parceiros" name="Parceiros" route='/partners' />
      </section>
      <Trucks />
      <Slide />
      <Feature/>
      <Form/>
    </div>

  );
}
