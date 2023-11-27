import Button from "./../../ui/Button";
import Input from "./../../ui/Input";
import Welcome from "./Welcome";
import TextEscape from "./TextEscape";

export default function Login() {
  return (
    <div
      className=" flex h-[60rem] flex-row items-center justify-center
    gap-24 bg-[url('../../../public/loginBG.png')]  bg-left-top bg-no-repeat  "
    >
      <div className="mt-20 flex  flex-col rounded-xl bg-blue-1100 p-10 text-slate-50">
        <div className="flex w-fit flex-col gap-7 px-12 pt-14">
          <Welcome>
            Bem <br className="mb-4" /> Vindo!
          </Welcome>
          <Button text="Entrar" login={true} />
          <TextEscape text="Voltar ao inicio" route="/" />
        </div>
      </div>
      <div className="flex flex-col gap-6 ">
        <h1 className="text-center text-7xl  uppercase">Login</h1>
        <form
          action=""
          className="flex flex-col items-center justify-center gap-8 rounded-xl bg-blue-1100 p-20 px-32  "
        >
          <div className="flex flex-col items-center justify-center gap-5 ">
            <Input inputType="Login/Register" text={"Email"} />
            <Input inputType="Login/Register" text={"Senha"} />
            <Input inputType="Login/Register" text={"CPF"} />
          </div>

          <TextEscape
            text="Não possui conta? Cadastre aqui."
            route="/account/signup"
          />
        </form>
      </div>
    </div>
  );
}
