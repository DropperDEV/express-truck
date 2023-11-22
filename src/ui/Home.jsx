import Card from "./Card";
import Banner from "./Banner"

export default function Home() {
  return (
    <div>
      <Banner/>
      <section className=" grid grid-cols-1 gap-10 md:flex md:flex-row md:items-center md:justify-around md:gap-0  ">
        <Card image="user.png" altImage="Usuário" name="Área Cliente" />
        <Card image="terms.jpg" altImage="Termos" name="Termos" />
        <Card image="partners.jpg" altImage="Parceiros" name="Parceiros" />
      </section>
    </div>
  );
}
