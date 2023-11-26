import Button from "./../../ui/Button";

export default function Login() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-col  rounded-xl bg-blue-1100 p-10 text-slate-50">
        <div className="flex w-fit flex-col gap-7 px-12 pt-14">
          <p className=" text-6xl font-semibold">
            Bem <br className="mb-4" /> Vindo!
          </p>
          <Button text="Entrar" login={true} />
          <p className="mt-4 text-center">Voltar ao iníco</p>
        </div>
      </div>
      <div>
        <h1>Login</h1>
        <form action="">
          <div>
            <input type="text" placeholder="email" />
            <input type="text" placeholder="senha" />
            <input type="text" placeholder="cpf" />
          </div>
          <p>Não possui conta? Cadastre aqui.</p>
        </form>
      </div>
    </div>
  );
}
