import SideBySide from "../ui/SideBySide";
import TextIntro from "../features/partners/TextIntro";
import Subtitle from "../features/partners/Subtitle";

export default function About() {
  return (
    <div>
      <section className='mt-20'>
        <TextIntro>
          <Subtitle text={`EXPRESS TRUCK`} topText={true} tText={"Somos a"} />
          <p className="w-[340px] text-sm md:w-[440px]  lg:ml-3 lg:text-lg xl:text-xl">
            Seja bem vindo à Logística Integrada Express Truck, uma referência
            em excelência operacional e soluções logísticas inovadoras. Somos
            uma empresa dedicada a criar pontes eficientes entre origens e
            destinos, comprometidas com a entrega de serviços logísticos de alta
            qualidade. <br /><br /> Nossa missão é fornecer soluções logísticas integradas e
            personalizadas que impulsionem o sucesso de nossos clientes.
            Buscamos constantemente inovação, eficiência e confiabilidade em
            cada elo da cadeia de suprimentos.
          </p>
        </TextIntro>
        <SideBySide></SideBySide>
      </section>
    </div>
  );
}
