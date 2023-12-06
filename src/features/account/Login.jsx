import Button from "./../../ui/Button";
import Input from "./../../ui/Input";
import Welcome from "./Welcome";
import TextEscape from "./TextEscape";
import Title from "./Title";
import Confirm from "./Confirm";
import InputArea from "./InputArea";
import { useState } from "react";
import { loginUser } from "../../services/apiUsers";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()


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
      await loginUser(user,navigate);
    } catch (error) {
      console.error(error);
      throw new Error("Some error");
    }
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
          <Button text="Entrar" login={true} route="/account/myaccount" />
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
              action={handleChange}
              type="email"
            />
            <Input
              inputType="Login/Register"
              text="Senha"
              type="password"
              name={"password"}
              action={handleChange}
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
