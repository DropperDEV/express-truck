import Button from "./../../ui/Button";
import Input from "./../../ui/Input";
import Welcome from "./Welcome";
import TextEscape from "./TextEscape";
import Title from "./Title";
import Confirm from "./Confirm";
import InputArea from "./InputArea";
//import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCPF] = useState("");
 // const dispatch = useDispatch();
 // const navigate = useNavigate();



  return (
    <form
      action=""
      className=" flex h-[60rem] flex-col items-center justify-center gap-5  bg-[url('../../../public/loginBG.png')]
    bg-left-top bg-no-repeat  sm:gap-24 md:flex-row  "
    >
      <Confirm>
        <div className="flex w-fit flex-col lg:px-7 lg:pt-8 xl:gap-7 xl:px-12 xl:pt-14">
          <Welcome>
            Bem <br className="mb-4" /> Vindo!
          </Welcome>
          <Button text="Entrar" login={true} route="/account/myaccount"  />
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
              value={email}
              action={(e) => setEmail(e.target.value)}
              type='email'
            />
            <Input
              inputType="Login/Register"
              text="Senha"
              type="password"
              value={password}
              action={(e) => setPassword(e.target.value)}
              
            />
            <Input
              inputType="Login/Register"
              type="text"

              text="CPF"
              value={cpf}
              action={(e) => setCPF(e.target.value)}
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
