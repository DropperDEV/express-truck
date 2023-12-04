import PersonalInfo from "./PersonalInfo";
import { useDispatch, useSelector } from "react-redux";
import {
  updatedAddress,
  updatedCPF,
  updatedEmail,
  updatedPhone,
} from "./userSlice";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/apiUsers";
export default function UserData() {
  const [change, setChange] = useState(true);
  const email = useSelector((state) => state.user.email);
  const cpf = useSelector((state) => state.user.cpf);
  const address = useSelector((state) => state.user.address);
  const phone = useSelector((state) => state.user.phone);


  useEffect(function(){
    getUsers().then(data => console.log(data))
  },[])
  const dispatch = useDispatch();

  function handleClick() {
    setChange((change) => !change);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-1100 px-7 py-3">
      <div className=" flex flex-col gap-3 sm:grid  sm:grid-cols-2">
        <PersonalInfo
          infoName="CPF"
          info={cpf}
          action={(e) => dispatch(updatedCPF(e.target.value))}
          active={change}
        />
        <PersonalInfo
          infoName="ENDEREÇO"
          info={address}
          action={(e) => dispatch(updatedAddress(e.target.value))}
          active={change}
        />
        <PersonalInfo
          infoName="EMAIL"
          info={email}
          action={(e) => dispatch(updatedEmail(e.target.value))}
          active={change}
        />
        <PersonalInfo
          infoName="TELEFONE"
          info={phone}
          action={(e) => dispatch(updatedPhone(e.target.value))}
          active={change}
        />
      </div>
      <button className="text-sm " onClick={() => handleClick()}>
        Mudar dados
      </button>
    </div>
  );
}
