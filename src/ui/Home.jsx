import Card from "./Card";
import Banner from "./Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <section className=" grid grid-cols-1  md:flex md:flex-row md:items-center md:justify-around md:gap-0  ">
        <Card image="user.png" altImage="Usuário" name="Área Cliente" />
        <Card image="terms.jpg" altImage="Termos" name="Termos" />
        <Card image="partners.jpg" altImage="Parceiros" name="Parceiros" />
      </section>
      <div className="mt-36  flex h-full w-full items-center justify-center bg-center">
        <img src="trucks.png" className="w-5/6 md:w-4/6 lg:w-3/6" />
      </div>
      <div className=" flex items-center justify-center bg-slate-950 p-10 py-16 text-center text-xl font-bold text-slate-50 sm:text-2xl">
        <p>Os mais rápidos e experientes do mercado</p>
      </div>
    </div>
  );
}
