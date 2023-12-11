import FormTitle from "./FormTitle";
import FormMain from "./FormMain";
import { useState } from "react";
import { createBudget } from "../../services/apiBudget";

export default function Form() {
  const [budget, setBudget] = useState({
    email: "",
    nome: "",
    endereco: "",
    tipo_carga: "",
    peso_carga: "",
    mais_info: "",
  });



  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await createBudget(budget);
    } catch (error) {
      console.error(error);
      throw new Error("Some error");
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center justify-center gap-6 bg-gray-1100 p-16"
    >
      <FormTitle />

      <FormMain setBudget={setBudget}/>
    </form>
  );
}
