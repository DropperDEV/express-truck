import Input from "../ui/Input";
import GoTo from "../features/account/GoTo";
import Title from "../features/account/Title";
import InputArea from "../features/account/RegisterMainInputs";
import { useState } from "react";

import { createUser } from "../services/apiUsers";
import { useNavigate } from "react-router-dom";
import RegisterConfirm from "./../features/account/RegisterConfirm";

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
      navigate("/account/login");
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
      <RegisterConfirm
        buttonText={"Criar"}
        title={"É um prazer lhe ter conosco!"}
        backText={"Voltar ao inicio"}
      />
      <div className="flex w-fit flex-col gap-7 px-7 pt-10"></div>

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
              inputType="CPF"
              text={"Digite um CPF no formato: xxx.xxx.xxx-xx"}
              name={"cpf"}
              action={handleChange}
              type={"number"}
            />
          </div>

          <GoTo text="Já possui conta? Entrar." route="/account/login" />
        </InputArea>
      </div>
    </form>
  );
}
