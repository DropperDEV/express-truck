import GoTo from "../features/account/GoTo";
import Title from "../features/account/Title";
import { useState } from "react";

import { createUser } from "../services/apiUsers";
import { useNavigate } from "react-router-dom";
import RegisterConfirm from "./../features/account/RegisterConfirm";
import RegisterCol from "./../features/account/RegisterCol";
import RegisterMainInputs from "../features/account/RegisterMainInputs";
import RegisterInput from "../features/account/RegisterInput";
import CheckVisible from "./../features/account/CheckVisible";
import { Helmet } from "react-helmet";

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    cpf: "",
  });
  const [visiblePassword, setVisiblePassword] = useState(false);
  const navigate = useNavigate();

  function handleChange(event) {
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

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
      <Helmet>
        <title>Cadastrar</title>
      </Helmet>
      <RegisterConfirm
        buttonText={"Criar"}
        title={"É um prazer lhe ter conosco!"}
        backText={"Voltar ao inicio"}
      />

      <RegisterCol>
        <Title title="Cadastrar" />{" "}
        <RegisterMainInputs>
          <div className="flex flex-col items-center justify-center gap-5 ">
            <RegisterInput
              text="Email"
              name={"email"}
              action={handleChange}
              type="email"
            />
            <RegisterInput
              text="Senha"
              name={"password"}
              action={handleChange}
              type={visiblePassword ? "text" : "password"}
            />
            <RegisterInput
              text="Digite um CPF no formato: xxx.xxx.xxx-xx"
              name={"cpf"}
              action={handleChange}
              type={"number"}
              mask={"000.000.000-00"}
            />
          </div>
          <CheckVisible
            id={"passwordTurnVisible"}
            onChange={() => setVisiblePassword(!visiblePassword)}
            name={"passwordTurnVisible"}
            text={"Mostrar a senha?"}
          />

          <GoTo text="Já possui conta? Entrar." route="/account/login" />
        </RegisterMainInputs>
      </RegisterCol>
    </form>
  );
}
