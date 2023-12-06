import Square from "./Square";
import Truck from "../../ui/Icons/Truck";
import Engine from "../../ui/Icons/Engine";
import Puzzle from "../../ui/Icons/Puzzle";
import Box from "../../ui/Icons/Box";

export default function Feature() {
    return (
        <section className=" flex   w-full items-center justify-center  bg-gray-1000 p-14 text-center text-stone-950">
            <div className="mx-auto grid h-fit w-fit grid-cols-1 gap-10 sm:grid-cols-2">
                <Square>
                    <Truck />
                    <p className="font-bold uppercase text-base ">OS MAIS RÁPIDOS</p>
                    <p className="text-sm">De todo o mercado</p>
                </Square>
                <Square>
                    <Engine />
                    <p className="font-bold uppercase  text-base">Alta tecnologia</p>
                    <p  className="text-sm">Forte formação profissional</p>
                </Square>
                <Square>
                    <Puzzle />

                    <p className="font-bold uppercase text-base">DIVERSAS INTEGRAÇÕES</p>
                    <p  className="text-sm">O melhor Envio</p>
                </Square>
                <Square>

                    <Box />

                    <p className="font-bold uppercase text-base">TRANSPORTE EFICAZ</p>
                    <p  className="text-sm" >Logística otimizada</p>
                </Square>
            </div>
        </section>
    )
}