import GoTo from "../features/account/GoTo";
import Title from "../features/account/Title";
import Confirm from "../features/account/LoginConfirm";
import RegisterMainInputs from "../features/account/RegisterMainInputs";
import { useState } from "react";
import { useLogin } from "../features/account/useLogin";
import RegisterCol from "./../features/account/RegisterCol";
import RegisterInput from "./../features/account/RegisterInput";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);

  const { login } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    if (!email || !password) return;
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
      className=" flex h-[60rem] flex-col items-center justify-center gap-5  bg-[url('../../../public/loginBG.png')]
    bg-left-top bg-no-repeat  sm:gap-24 md:flex-row  "
    >
      <Confirm />
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
          <div className="  sm:mr-24 lg:mr-48 flex  gap-2">
            <input
              onChange={() => setVisiblePassword(!visiblePassword)}
              id="passwordTurnVisible"
              type="checkbox"
              name="passwordTurnVisible"
              value=""
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <p className=" text-sm text-slate-50">Mostrar a senha?</p>
          </div>
          <GoTo
            text="Não possui conta? Cadastre aqui."
            route="/account/signup"
          />
        </RegisterMainInputs>
      </RegisterCol>
    </form>
  );
}
