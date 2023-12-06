import PersonalInfo from "./PersonalInfo";
import { useState } from "react";
import { useUsers } from "./useUsers";
import Button from "./../../ui/Button";

export default function UserData() {
  // const [userEdit, setUserEdit] = useState({
  //   email: "",
  //   cpf: "",
  //   address: "",
  //   phone: "",
  // });
  const [onlyRead, setOnlyRead] = useState(true);
  const [isLoading, users, error] = useUsers();
  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error loading user data</div>;
  }

  const [user] = users;
  const { cpf, address, email, phone } = user;

  function handleChange() {
    // setUserEdit((prevFormData) => {
    //   return {
    //     ...prevFormData,
    //     [event.target.name]: event.target.value,
    //   };
    // });
  }



  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-1100 px-7 py-3">
      <form className=" flex flex-col gap-3 sm:grid  sm:grid-cols-2">
        <PersonalInfo
          infoName="CPF"
          info={cpf
            .toString()
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
          name={"cpf"}
          action={handleChange}
          edit={onlyRead}
        />
        <PersonalInfo
          infoName="ENDEREÇO"
          info={address}
          name={"address"}
          action={handleChange}
          edit={onlyRead}
        />
        <PersonalInfo
          infoName="EMAIL"
          info={email}
          name={"email"}
          action={handleChange}
          edit={onlyRead}
        />
        <PersonalInfo
          infoName="TELEFONE"
          info={phone
            .toString()
            .replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4")}
          name={"phone"}
          action={handleChange}
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
