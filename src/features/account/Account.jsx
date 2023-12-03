import Road from "./Road";
import Card from "./../../ui/Card";
import TermsIcon from "../../ui/Icons/TermsIcon";
import Home from "../../ui/Icons/Home";
import Container from "./Container";
import Subtitle from "./../partners/Subtitle";
import PersonalInfo from "./PersonalInfo";
import { Link } from "react-router-dom";
import RoadIcon from "../../ui/Icons/RoadIcon";
import Cart from "./../../ui/Icons/Cart";

export default function Account() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-10 flex w-80 items-center justify-center  overflow-hidden rounded-xl sm:w-9/12">
        <div className=" lg:1/4 w-1/2 rounded-xl  rounded-r-none bg-gray-1100 px-2 py-5  md:w-1/3 xl:w-1/5">
          <h1 className=" text-xl font-bold uppercase sm:text-2xl md:text-3xl ">
            Bem Vindo
          </h1>
          <p className=" text-base ">Novamente</p>
        </div>
        <Road />
      </div>
      <div className="my-14  flex items-center gap-1 rounded-xl bg-gray-1100 p-1 sm:gap-4 ">
        {" "}
        <Card image={<Home />} name="Inicio" route="/" Account={true} />
        <Card
          image={<TermsIcon />}
          name="Termos"
          route="/terms"
          Account={true}
        />
        <Container />
      </div>
      <div>
        <div className="my-10 w-full border-b-2 border-[#675b5b80] pb-2 text-center ">
          <Subtitle text="MEUS DADOS" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-1100 px-7 py-3">
          <div className=" flex flex-col gap-3 sm:grid  sm:grid-cols-2">
            <PersonalInfo infoName="CPF" info="XXX XXX XXX XX" />
            <PersonalInfo
              infoName="ENDEREÇO"
              info="Rua XX Cidade XX Estado XX"
            />
            <PersonalInfo infoName="EMAIL" info="XXXX@gmail.com" />
            <PersonalInfo infoName="TELEFONE" info="+55 (XX) X XXXX-XXXX" />
          </div>
          <Link className="text-sm ">Mudar dados</Link>
        </div>
        <div className="my-10 w-full border-b-2 border-[#675b5b80] pb-2 text-center ">
          <Subtitle text="MINHAS ROTAS" />
        </div>
        <div className="mb-14 flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-1100 px-10 py-32 md:px-44">
          <div className="flex items-center justify-center gap-5">
            <RoadIcon />
            <p className=" w-52">Sem rotas a caminho</p>
          </div>
        </div>
        <div className="my-10 w-full border-b-2 border-[#675b5b80] pb-2 text-center ">
          <Subtitle text="MEUS PEDIDOS" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-1100 px-10 py-32  md:px-44">
          <div className="flex items-center justify-center gap-5">
            <Cart />
            <p className=" w-52">Sem pedidos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
