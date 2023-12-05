/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import PersonalInfo from "./PersonalInfo";
//import { useEffect, useState } from "react";
import {  useState } from "react";
import { getUsers } from "../../services/apiUsers";
import { useQuery } from "@tanstack/react-query";

export default function UserData() {
  const [change, setChange] = useState(true);
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUsers,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const [user] = users
  const { cpf, addres, email, phone } = user;
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-1100 px-7 py-3">
      <div className=" flex flex-col gap-3 sm:grid  sm:grid-cols-2">
        <PersonalInfo infoName="CPF" info={cpf} active={change} />
        <PersonalInfo infoName="ENDEREÇO" info={addres} active={change} />
        <PersonalInfo infoName="EMAIL" info={email} active={change} />
        <PersonalInfo infoName="TELEFONE" info={phone} active={change} />
      </div>
      <button className="text-sm " onClick={() => handleClick()}>
        Mudar dados
      </button>
    </div>
  );
}
