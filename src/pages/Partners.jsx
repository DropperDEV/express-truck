import Email from "../ui/Icons/Email";
import Phone from "../ui/Icons/Phone";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Slide from "../ui/Slide";
import SideBySide from "../ui/SideBySide";
import TextIntro from "../features/partners/TextIntro";
import Subtitle from "../features/partners/Subtitle";
import Contact from "../features/partners/Contact";
import Trucker from "../features/partners/Trucker";

export default function Partners() {
  return (
    <div className="relative mt-44 bg-slate-50  ">
      <Slide
        type="modern"
        textElement={
          <h1 className="text-3xl font-semibold uppercase md:text-5xl lg:text-6xl">
            Seja parceiro
          </h1>
        }
      />

      <SideBySide>
        <TextIntro>
          <Subtitle text={`Faça parte  dessa família`} />
          <p className="w-[340px] text-sm md:w-[440px]  lg:ml-3 lg:text-lg xl:text-xl">
            São empresas terceirizadas que trabalham conosco com coletas,
            entregas e manuseio da carga, visando suprir as necessidades
            operacionais, nas regiões em que a Express Truck não possui
            unidades. Para ser considerado um parceiro é necessário passar por
            um processo de avaliação que consiste na verificação de requisitos
            básicos e visa garantir a qualidade dos serviços prestados aos
            clientes da Express Truck.
          </p>
        </TextIntro>

        <div className="mr-24 flex flex-col gap-10 sm:mr-40 md:ml-24 md:mr-0  md:gap-16 lg:ml-0   ">
          <div className="flex flex-col gap-1">
            <Subtitle text={"Fale conosco"} />
            <p className="ml-5">Informações de contato</p>
          </div>
          <div className="flex flex-col gap-10 border-t-2 border-[#675b5b80] pt-3 md:flex-row md:items-center md:justify-center">
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

      <section className="mb-24 flex flex-col lg:flex-row items-center justify-center  gap-10 lg:items-start lg:justify-around">
        <form
          action=""
          className="flex flex-col items-center justify-center gap-10"
        >
          <div className="mb-7 flex flex-col items-center justify-center gap-7">
            <div className="mb-10 border-b-2 border-[#675b5b80] pb-2 ">
              <Subtitle text={"Preencha o campo abaixo"} />
            </div>
            <div className="flex flex-col   gap-5">
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
        <Trucker />
      </section>
    </div>
  );
}
