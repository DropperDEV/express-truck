import Square from "./Square";
import Truck from "../../ui/Icons/Truck";
import Engine from "../../ui/Icons/Engine";
import Puzzle from "../../ui/Icons/Puzzle";
import Box from "../../ui/Icons/Box";

export default function Feature() {
  return (
    <section className=" flex   w-full items-center justify-center  bg-gray-1000 p-14 text-center text-stone-950">
      <div className="mx-auto grid h-fit w-fit grid-cols-1 grid-rows-2 gap-10 sm:grid-cols-2">
        <Square
          title={"OS MAIS RÁPIDOS"}
          icon={<Truck />}
          text={"De todo o mercado"}
        />
        <Square
          title={"Alta tecnologia"}
          icon={<Engine />}
          text={"Forte formação profissional"}
        />
        <Square
          title={"DIVERSAS INTEGRAÇÕES"}
          icon={<Puzzle />}
          text={"O melhor Envio"}
        />
        <Square
          title={"TRANSPORTE EFICAZ"}
          icon={<Box />}
          text={"Logística otimizada"}
        />
      </div>
    </section>
  );
}
