import Card from "./../../ui/Card";
import User from "./../../ui/Icons/User";
import TermsIcon from "./../../ui/Icons/TermsIcon";
// import Truck from './../../ui/Icons/Truck';
import HandShake from "./../../ui/Icons/HandShake";

export default function HomeNavigation() {
  return (
    <section className=" grid grid-cols-1  lg:flex lg:flex-row lg:items-center lg:justify-around lg:gap-0  ">
      <Card image={<User />} name="Área Cliente" route="/express-truck/account/login" />
      <Card
        image={<TermsIcon main={true} />}
        name="Termos"
        route="/express-truck/terms"
      />
      {/* <Card image={<Truck main={true} />} name="Quem somos" route="/about" /> */}
      <Card
        image={<HandShake />}
        name="Parceiros"
        route="/express-truck/partners"
      />
    </section>
  );
}
