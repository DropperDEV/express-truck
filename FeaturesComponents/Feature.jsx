import Square from "./Square";
import Truck from "../Icons/Truck";
import Engine from "../Icons/Engine";
import Puzzle from "../Icons/Puzzle";
import Box from "../Icons/Box";

export default function Feature() {
    return (
        <section className="my-28 flex   w-full items-center justify-center  bg-gray-1000 p-14 text-center text-stone-950">
            <div className="mx-auto grid h-fit w-fit grid-cols-1 gap-10 sm:grid-cols-2">
                <Square>
                    <Truck />
                    <p className="font-bold uppercase ">OS MAIS RÁPIDOS</p>
                    <p>De todo o mercado</p>
                </Square>
                <Square>
                    <Engine />
                    <p className="font-bold uppercase ">Alta tecnologia</p>
                    <p>Forte formação profissional</p>
                </Square>
                <Square>
                    <Puzzle />

                    <p className="font-bold uppercase ">DIVERSAS INTEGRAÇÕES</p>
                    <p>O melhor Envio às plataformas </p>
                </Square>
                <Square>

                    <Box />

                    <p className="font-bold uppercase ">TRANSPORTE EFICAZ</p>
                    <p>Logística otimizada</p>
                </Square>
            </div>
        </section>
    )
}