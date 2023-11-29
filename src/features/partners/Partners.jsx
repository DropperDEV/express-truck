import Email from "./../../ui/Icons/Email";
import Phone from "./../../ui/Icons/Phone";
import Input from "./../../ui/Input";
import Button from "./../../ui/Button";
import Slide from "../../ui/Slide";
import SideBySide from "./../../ui/SideBySide";
import TextIntro from "./TextIntro";
import Subtitle from "./Subtitle";
import Contact from "./Contact";

export default function Partners() {
  return (
    <div className="relative mt-44 bg-slate-50">
      <Slide
        type="modern"
        textElement={
          <h1 className="text-4xl font-semibold uppercase md:text-5xl lg:text-6xl">
            Seja parceiro
          </h1>
        }
      />

      <SideBySide>
        <TextIntro>
          <Subtitle text={`Faça parte  dessa família`} />
          <p className="md:w-[440px] text-sm md:text-xl  w-[340px]">
            São empresas terceirizadas que trabalham conosco com coletas,
            entregas e manuseio da carga, visando suprir as necessidades
            operacionais, nas regiões em que a Express Truck não possui
            unidades. Para ser considerado um parceiro é necessário passar por
            um processo de avaliação que consiste na verificação de requisitos
            básicos e visa garantir a qualidade dos serviços prestados aos
            clientes da Express Truck.
          </p>
        </TextIntro>

        <div className="flex flex-col gap-10  md:gap-24 mr-24 ">
          <div className="flex flex-col gap-1">
            <Subtitle text={"Fale conosco"} />
            <p>Informações de contato</p>
          </div>
          <div className="flex md:items-center md:justify-center flex-col md:flex-row gap-10 border-t-2 border-[#675b5b80] pt-3">
            <Contact
              image={<Phone />}
              text={"Número"}
              content={"55 (85) 8800-3322"}
            />
            <Contact
              image={<Email />}
              text={"email"}
              content={"trabalheconosco@expresstruck.com"}
            />
          </div>
        </div>
      </SideBySide>

      <section className="mb-24 flex flex-row justify-around gap-10">
        <form action="" className="flex flex-col items-center gap-10">
          <div className="mb-7 flex flex-col items-center justify-center gap-7">
            <div className="mb-10 border-b-2 border-[#675b5b80] pb-2 ">
              <Subtitle text={"Preencha o campo abaixo"} />
            </div>
            <div className="flex flex-col gap-5">
              <Input text="Nome  " inputType={"maWidth"} />
              <Input text="Email" inputType={"maWidth"} />
              <Input text="CNPJ" inputType={"maWidth"} />
              <Input text="Empresa" inputType={"maWidth"} />
              <Input text="Cidade e Estado" inputType={"maWidth"} />
            </div>
          </div>
          <div className="flex w-max flex-col justify-center     gap-7">
            <div className="w-max border-b-2 border-[#675b5b80] pb-2">
              <Subtitle text={" Transporte"} />
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <Input text={"Quantidade de veículos"} inputType={"maWidth"} />
              <Input
                text={"Quantidade de funcionários"}
                inputType={"maWidth"}
              />
            </div>
          </div>
          <Button text="Enviar" maxWidth={true} />
        </form>
        <div>
          <img src="partner.png" alt="Parceiro de nosso trabalho." />
        </div>
      </section>
    </div>
  );
}
