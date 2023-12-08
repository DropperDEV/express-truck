import Button from "../../ui/Button";
import GoTo from "./GoTo";
import Welcome from "./Welcome";

/* eslint-disable react/prop-types */
export default function Confirm() {
  return (
    <div className="mt-20 flex  flex-col rounded-xl bg-blue-1100 p-10 text-slate-50">
      <div className="flex w-fit flex-col lg:px-7 lg:pt-8 xl:gap-7 xl:px-12 xl:pt-14">
        <Welcome>
          Bem <br className="mb-4" /> Vindo!
        </Welcome>
        <Button text="Entrar" login={true} />
        <GoTo text="Voltar ao inicio" route="/" />
      </div>
    </div>
  );
}
