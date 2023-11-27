import Button from "./../../ui/Button";
import Input from "./../../ui/Input";
import Welcome from "./Welcome";
import TextEscape from "./TextEscape";
import Title from "./Title";
import Confirm from "./Confirm";
import FormLogin from "./FormLogin";
export default function SignUp() {
  return (
    <div
      className=" flex h-[60rem]  flex-row items-center justify-center
    gap-24 bg-slate-50  bg-[url('../../../public/signBG.png')] bg-right-bottom bg-no-repeat  "
    >
      <Confirm>
        <div className="flex w-fit flex-col gap-7 px-12 pt-14">
          <Welcome type="Sign">
            É um prazer <br /> lhe ter <br /> conosco!
          </Welcome>
          <Button text="Criar" login={true} />
          <TextEscape text="Voltar ao inicio" route="/" />
        </div>
      </Confirm>

      <div className="flex flex-col gap-6 ">
        <Title title="Cadastrar" />{" "}
        <FormLogin>
          <div className="flex flex-col items-center justify-center gap-5 ">
            <Input inputType="Login/Register" text={"Email"} />
            <Input inputType="Login/Register" text={"Senha"} />
            <Input inputType="Login/Register" text={"CPF"} />
          </div>

          <TextEscape text="Já possui conta? Entrar." route="/account/login" />
        </FormLogin>
      </div>
    </div>
  );
}
