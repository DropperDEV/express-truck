import Email from './../../ui/Icons/Email';
import Phone from './../../ui/Icons/Phone';
export default function Partners() {

  return (
    <div className="relative mt-44">
      <div className=" relative z-10 ml-[25%] w-3/4 overflow-visible py-4 lg:ml-[10%] lg:w-11/12">
        <div className="absolute inset-0 -ml-8 bg-[#033B75] p-8">&nbsp;</div>
      </div>
      <div className="z-1 relative mb-20 bg-stone-950 p-14 text-slate-50">
        <div className="border-l-2 border-slate-50 p-8">
          <h1 className="text-4xl font-semibold uppercase md:text-5xl lg:text-6xl">
            Seja parceiro
          </h1>
        </div>
      </div>

      <section className="flex items-center justify-around ">
        <div className="flex w-2/6 flex-col  justify-center gap-5">
          <h2 className="text-left text-5xl font-semibold uppercase">
            Faça parte <br /> dessa família
          </h2>
          <p className="text-xl">
            São empresas terceirizadas que trabalham conosco com coletas,
            entregas e manuseio da carga, visando suprir as necessidades
            operacionais, nas regiões em que a Express Truck não possui
            unidades. Para ser considerado um parceiro é necessário passar por
            um processo de avaliação que consiste na verificação de requisitos
            básicos e visa garantir a qualidade dos serviços prestados aos
            clientes da Express Truck.
          </p>
        </div>
        <div className="flex flex-col  gap-24 ">
          <div className="flex flex-col gap-1">
            <h2 className="text-left text-5xl font-semibold uppercase">
              Fale conosco
            </h2>
            <p>Informações de contato</p>
          </div>
          <div className="flex items-center justify-center gap-10 border-t-2 border-[#675b5b80]">
            <div>
              <p className="text-xl font-semibold flex gap-2"><span><Phone/></span>Número</p>
              <p className="text-xl">55 (85) 8800-3322</p>
            </div>
            <div>
              <p className="text-xl font-semibold flex gap-2"><span><Email/></span>Email</p>
              <p className="text-xl">trabalheconosco@expresstruck.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
