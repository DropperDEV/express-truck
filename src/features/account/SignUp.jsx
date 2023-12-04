import Button from "./../../ui/Button";
import Input from "./../../ui/Input";
import Welcome from "./Welcome";
import TextEscape from "./TextEscape";
import Title from "./Title";
import Confirm from "./Confirm";
import InputArea from "./InputArea";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatedCPF, updatedEmail, updatedPassword } from "./userSlice";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCPF] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password || !cpf) return;
    dispatch(updatedEmail(email));
    dispatch(updatedPassword(password));
    dispatch(updatedCPF(cpf));
    navigate("/account/myaccount");
  }
  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="flex h-[60rem] flex-col items-center justify-center gap-5 bg-[url('../../../public/loginBG.png')] bg-left-top  bg-no-repeat
    sm:gap-24 md:flex-row  md:bg-[url('../../../public/signBG.png')] md:bg-right-bottom  "
    >
      <Confirm>
        <div className="flex w-fit flex-col gap-7 px-7 pt-10">
          <Welcome type="Sign">
            É um prazer <br /> lhe ter <br /> conosco!
          </Welcome>
          <Button text="Criar" login={true} action={handleSubmit}/>
          <TextEscape text="Voltar ao inicio" route="/" />
        </div>
      </Confirm>

      <div className="flex flex-col gap-6 ">
        <Title title="Cadastrar" />{" "}
        <InputArea>
          <div className="flex flex-col items-center justify-center gap-5 ">
            <Input
              inputType="Login/Register"
              text={"Email"}
              value={email}
              action={(e) => setEmail(e.target.value)}
            />
            <Input
              inputType="Login/Register"
              text={"Senha"}
              value={password}
              action={(e) => setPassword(e.target.value)}
            />
            <Input
              inputType="Login/Register"
              text={"CPF"}
              value={cpf}
              action={(e) => setCPF(e.target.value)}
            />
          </div>

          <TextEscape text="Já possui conta? Entrar." route="/account/login" />
        </InputArea>
      </div>
    </form>
  );
}
