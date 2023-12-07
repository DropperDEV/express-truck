import PersonalInfo from "./PersonalInfo";
import { useState } from "react";
import useUsers from "./useUsers";
import Button from "../../ui/Button";
import {useUpdateUser} from "./useUpdateUsers";

export default function UserData() {
  const [onlyRead, setOnlyRead] = useState(true);
  const { isLoading, user, error } = useUsers();

  const currentEmail = user?.email || "";
  const currentCpf = user?.user_metadata?.cpf || "";
  const currentPhone = user?.user_metadata?.phone || "";
  const currentAddress = user?.user_metadata?.address || "";
  const { updateUser } = useUpdateUser();
  const [newEmail, setNewEmail] = useState(currentEmail);
  const [newCpf, setNewCpf] = useState(currentCpf);
  const [newPhone, setNewPhone] = useState(currentPhone);
  const [newAddress, setNewAddress] = useState(currentAddress);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error loading user data</div>;
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateUser({
      email: newEmail,
      address: newAddress,
      cpf: newCpf,
      phone: newPhone,
    });
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-1100 px-7 py-3">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-3 sm:grid  sm:grid-cols-2"
      >
        <PersonalInfo
          infoName="CPF"
          info={newCpf
            .toString()
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
          name={"cpf"}
          action={(e) => setNewCpf(e.target.value)}
          edit={onlyRead}
        />
        <PersonalInfo
          infoName="ENDEREÇO"
          info={newAddress}
          name={"address"}
          action={(e) => setNewAddress(e.target.value)}
          edit={onlyRead}
        />
        <PersonalInfo
          infoName="EMAIL"
          info={newEmail}
          name={"email"}
          action={(e) => setNewEmail(e.target.value)}
          edit={onlyRead}
        />
        <PersonalInfo
          infoName="TELEFONE"
          info={newPhone
            .toString()
            .replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4")}
          name={"phone"}
          action={(e) => setNewPhone(e.target.value)}
          edit={onlyRead}
        />

        <Button
          text="Salvar mudanças"
          login={true}
          action={() => setOnlyRead(!onlyRead)}
        />
      </form>
    </div>
  );
}
