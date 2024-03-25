import GoTo from "../features/account/GoTo";
import Title from "../features/account/Title";
import RegisterConfirm from "../features/account/RegisterConfirm";
import RegisterMainInputs from "../features/account/RegisterMainInputs";
import { useState } from "react";
import { useLogin } from "../features/account/useLogin";
import RegisterCol from "./../features/account/RegisterCol";
import RegisterInput from "./../features/account/RegisterInput";
import CheckVisible from "./../features/account/CheckVisible";
import { Helmet } from "react-helmet";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);

  const { login } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return alert("Digite todos as informações corretamente!")
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex h-[60rem] flex-col items-center justify-center gap-5  bg-[url('/express-truck/public/loginBG.png')]
    bg-left-top bg-no-repeat  sm:gap-24 md:flex-row  "
    >
      <Helmet>
        <title>Entrar</title>
      </Helmet>
      <RegisterConfirm
        buttonText={"Entrar"}
        title={"Bem  Vindo!"}
        backText={"Voltar ao inicio"}
      />
      <RegisterCol>
        <Title title="Login" />
        <RegisterMainInputs>
          <RegisterInput
            text="Email"
            name={"email"}
            action={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
          />
          <RegisterInput
            text="Senha"
            type={visiblePassword ? "text" : "password"}
            name={"password"}
            action={(e) => setPassword(e.target.value)}
            value={password}
          />
          <CheckVisible
            id={"passwordTurnVisible"}
            onChange={() => setVisiblePassword(!visiblePassword)}
            name={"passwordTurnVisible"}
            text={"Mostrar a senha?"}
          />
          <GoTo
            text="Não possui conta? Cadastre aqui."
            route="/express-truck/account/signup"
          />
        </RegisterMainInputs>
      </RegisterCol>
    </form>
  );
}
