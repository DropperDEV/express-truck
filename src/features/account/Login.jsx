import Button from "./../../ui/Button";
import Input from "./../../ui/Input";
import Welcome from "./Welcome";
import TextEscape from "./TextEscape";
import Title from "./Title";
import Confirm from "./Confirm";
import InputArea from "./InputArea";
import { useState } from "react";
import { useLogin } from './useLogin';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login} = useLogin()


  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password)
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }


  return (
    <form
      onSubmit={handleSubmit}
      className=" flex h-[60rem] flex-col items-center justify-center gap-5  bg-[url('../../../public/loginBG.png')]
    bg-left-top bg-no-repeat  sm:gap-24 md:flex-row  "
    >
      <Confirm>
        <div className="flex w-fit flex-col lg:px-7 lg:pt-8 xl:gap-7 xl:px-12 xl:pt-14">
          <Welcome>
            Bem <br className="mb-4" /> Vindo!
          </Welcome>
          <Button text="Entrar" login={true} />
          <TextEscape text="Voltar ao inicio" route="/" />
        </div>
      </Confirm>

      <div className="flex flex-col gap-4 sm:gap-6 ">
        <Title title="Login" />{" "}
        <InputArea>
          <div className="flex flex-col items-center justify-center gap-5 ">
            <Input
              inputType="Login/Register"
              text="Email"
              name={"email"}
              action={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
            />
            <Input
              inputType="Login/Register"
              text="Senha"
              type="password"
              name={"password"}
              action={(e) => setPassword(e.target.value)}
              value={password}
            />
            
          </div>

          <TextEscape
            text="Não possui conta? Cadastre aqui."
            route="/account/signup"
          />
        </InputArea>
      </div>
    </form>
  );
}
