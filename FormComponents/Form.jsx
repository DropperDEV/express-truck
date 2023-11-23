import Input  from "./input";
import Button from "../Button";

export default function Form() {
    return (
        <form
            action=""
            className="flex w-full flex-col items-center justify-center gap-6 bg-gray-1100 p-16">
            <h2 className="text-xl font-bold">Faça um Orçamento </h2>
            <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
                <div className="  grid grid-rows-3 gap-16 md:gap-8 ">
                    <div className="flex h-fit  w-fit  flex-col justify-center place-self-center text-xl">
                        <label htmlFor="">
                            <span className=" text-red-700">*</span> Nome
                        </label>
                        <Input />
                    </div>
                    <div className="flex h-fit  w-fit  flex-col justify-center place-self-center text-xl">
                        <label htmlFor="">
                            <span className=" text-red-700">*</span> Endereço
                        </label>
                        <Input />
                    </div>
                    <div className="flex h-fit  w-fit  flex-col justify-center place-self-center text-xl">
                        <label htmlFor="">
                            <span className=" text-red-700">*</span> Tipo de carga
                        </label>
                        <Input />
                    </div>
                </div>
                <div className=" grid  gap-16 md:gap-8">
                    <div className="flex h-fit  w-fit  flex-col justify-center place-self-center text-xl">
                        <label htmlFor="">
                            <span className=" text-red-700">*</span> Pesagem da carga
                        </label>
                        <Input />
                    </div>
                    <div className="flex h-fit  w-fit mt-5 flex-col justify-center place-self-center text-xl">
                        <label htmlFor="">
                            <span className=" text-red-700">*</span> Mais informações
                        </label>
                        <Input inputType={'big'}/>
                    </div>
                </div>
            </div>

            <Button text={"Enviar"} />
        </form>

    )
}