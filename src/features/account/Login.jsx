import Button from "./../../ui/Button";
import Input from "./../../ui/Input";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";

export default function Login() {
  return (
    <div
      className="mt-72 flex flex-row items-center justify-center gap-24
    bg-[url('../../../public/loginBG.png')] bg-no-repeat  bg-left-top h-[60rem]"
    >
      <div className="mt-20 flex  flex-col rounded-xl bg-blue-1100 p-10 text-slate-50">
        <div className="flex w-fit flex-col gap-7 px-12 pt-14">
          <Welcome>
            Bem <br className="mb-4" /> Vindo!
          </Welcome>
          <Button text="Entrar" login={true} />
          <Link to="/">
            <p className="mt-4 text-center text-lg font-semibold">
              Voltar ao iníco
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 ">
        <h1 className="text-center text-6xl font-medium uppercase">Login</h1>
        <form
          action=""
          className="flex flex-col items-center justify-center gap-8 rounded-xl bg-blue-1100 p-20 px-32  "
        >
          <div className="flex flex-col items-center justify-center gap-5 ">
            <Input inputType="Login/Register" text={"Email"} />
            <Input inputType="Login/Register" text={"Senha"} />
            <Input inputType="Login/Register" text={"CPF"} />
          </div>
          <Link to="/account/signup">
            <p className="text-lg font-semibold text-slate-50">
              Não possui conta? Cadastre aqui.
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}
