import Card from "./../../ui/Card";
import Container from "./Container";
import TermsIcon from "./../../ui/Icons/TermsIcon";
import Home from "./../../ui/Icons/Home";

export default function AccountNavigation() {
  return (
    <section className="my-14  flex items-center gap-1 rounded-xl bg-gray-1100 p-1 sm:gap-4 ">
      <Card image={<Home />} name="Inicio" route="/" Account={true} />
      <Card image={<TermsIcon />} name="Termos" route="/terms" Account={true} />
      <Container />
    </section>
  );
}
