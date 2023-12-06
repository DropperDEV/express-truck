import Button from "./../../ui/Button";
import Input from "./../../ui/Input";
import Welcome from "./Welcome";
import TextEscape from "./TextEscape";
import Title from "./Title";
import Confirm from "./Confirm";
import InputArea from "./InputArea";
import { useState } from "react";

import { createUser } from "../../services/apiUsers";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    cpf: "",
  });
  const navigate = useNavigate();

  function handleChange(event) {
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  console.log(user);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await createUser(user);
      navigate("/account/myaccount");
    } catch (error) {
      console.error(error);
      throw new Error("Some error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-[60rem] flex-col items-center justify-center gap-5 bg-[url('../../../public/loginBG.png')] bg-left-top  bg-no-repeat
    sm:gap-24 md:flex-row  md:bg-[url('../../../public/signBG.png')] md:bg-right-bottom  "
    >
      <Confirm>
        <div className="flex w-fit flex-col gap-7 px-7 pt-10">
          <Welcome type="Sign">
            É um prazer <br /> lhe ter <br /> conosco!
          </Welcome>
          <Button text="Criar" login={true} />
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
              name={"email"}
              type={"email"}
              action={handleChange}
            />
            <Input
              inputType="Login/Register"
              text={"Senha"}
              name={"password"}
              type={"password"}
              action={handleChange}
            />
            <Input
              inputType="Login/Register"
              text={"Digite um CPF no formato: xxx.xxx.xxx-xx"}
              name={"cpf"}
              action={handleChange}
              type={"text"}
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            />
          </div>

          <TextEscape text="Já possui conta? Entrar." route="/account/login" />
        </InputArea>
      </div>
    </form>
  );
}
