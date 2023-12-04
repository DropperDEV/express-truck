import Button from "./../../ui/Button";
import Input from "./../../ui/Input";
import Welcome from "./Welcome";
import TextEscape from "./TextEscape";
import Title from "./Title";
import Confirm from "./Confirm";
import InputArea from "./InputArea";
import supabase from "../../supabase";
import { updatedCPF, updatedEmail } from "./userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCPF] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line no-unused-vars
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        console.error("Erro ao autenticar:", error.message);
        // Trate o erro de autenticação aqui
      } else {
        // Verifique se o CPF corresponde ao CPF armazenado no banco de dados
        const { data: users, error: fetchError } = await supabase
          .from("users")
          .select("*")
          .eq("cpf", cpf);

        if (fetchError) {
          console.error("Erro ao buscar usuário:", fetchError.message);
          // Trate o erro de busca do usuário aqui
          return;
        }

        if (users && users.length > 0) {
          // Usuário autenticado com sucesso e encontrado no banco de dados
          dispatch(updatedEmail(email));
          dispatch(updatedCPF(cpf));
          navigate("/account/myaccount");
        } else {
          // Usuário não encontrado no banco de dados
          console.error("Usuário não encontrado no banco de dados.");
          // Trate a situação de usuário não encontrado aqui
        }
      }
    } catch (error) {
      console.error("Erro geral:", error.message);
    }
  };
  return (
    <form
      onSubmit={handleLogin}
      action=""
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
              value={email}
              action={(e) => setEmail(e.target.value)}
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
