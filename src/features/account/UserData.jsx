/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import PersonalInfo from "./PersonalInfo";
import {  useState } from "react";
import { useUsers } from './useUsers';

export default function UserData() {
  const [isLoading, users, error] =useUsers()
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const [user] = users
  const { cpf, addres, email, phone } = user;
   

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-1100 px-7 py-3">
      <div className=" flex flex-col gap-3 sm:grid  sm:grid-cols-2">
        <PersonalInfo infoName="CPF" info={cpf.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}/>
        <PersonalInfo infoName="ENDEREÇO" info={addres}/>
        <PersonalInfo infoName="EMAIL" info={email}/>
        <PersonalInfo infoName="TELEFONE" info={phone.toString().replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')}/>
      </div>
    </div>
  );
}
