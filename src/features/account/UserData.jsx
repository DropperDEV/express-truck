import PersonalInfo from "./PersonalInfo";
import { useState } from "react";
import useUsers from "./useUsers";
import Button from "../../ui/Button";
import { useUpdateUser } from "./useUpdateUsers";
import Input from "../../ui/Input";

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
        className=" flex flex-col gap-4"
      >
        <div className="flex flex-col gap-3 sm:grid  sm:grid-cols-2">
          <PersonalInfo>
            {" "}
            <p className="uppercase">CPF</p>
            <Input
              value={newCpf}
              action={(e) => setNewCpf(e.target.value)}
              type={"cpf"}
              name={"cpf"}
              onlyRead={onlyRead}
              mask={"000.000.000-00"}
            />
          </PersonalInfo>
          <PersonalInfo>
            {" "}
            <p className="uppercase">ENDEREÇO</p>
            <Input
              value={newAddress}
              action={(e) => setNewAddress(e.target.value)}
              type={"address"}
              name={"address"}
              onlyRead={onlyRead}
            />
          </PersonalInfo>
          <PersonalInfo>
            {" "}
            <p className="uppercase">EMAIL</p>
            <Input
              value={newEmail}
              action={(e) => setNewEmail(e.target.value)}
              type={"email"}
              name={"email"}
              onlyRead={onlyRead}
            />
          </PersonalInfo>
          <PersonalInfo>
            {" "}
            <p className="uppercase">TELEFONE</p>
            <Input
              value={newPhone}
              action={(e) => setNewPhone(e.target.value)}
              type={"phone"}
              name={"phone"}
              onlyRead={onlyRead}
              mask={"(00) 90000-0000"}
            />
          </PersonalInfo>
        </div>
        <Button
          text={onlyRead === true ? "Editar" : "Salvar mudanças"}
          login={true}
          action={() => setOnlyRead(!onlyRead)}
        />
      </form>
    </div>
  );
}
