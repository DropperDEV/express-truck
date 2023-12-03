import { Link } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import { useSelector } from "react-redux";

export default function UserData() {
  const email = useSelector((state) => state.user.email);
  const cpf = useSelector((state) => state.user.cpf);
  const adress = useSelector((state) => state.user.adress);
  const phone = useSelector((state) => state.user.phone);

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-1100 px-7 py-3">
      <div className=" flex flex-col gap-3 sm:grid  sm:grid-cols-2">
        <PersonalInfo infoName="CPF" info={cpf} />
        <PersonalInfo infoName="ENDEREÇO" info={adress} />
        <PersonalInfo infoName="EMAIL" info={email} />
        <PersonalInfo infoName="TELEFONE" info={phone} />
      </div>
      <Link className="text-sm ">Mudar dados</Link>
    </div>
  );
}
