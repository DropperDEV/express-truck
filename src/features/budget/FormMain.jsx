/* eslint-disable react/prop-types */
import FormInputCol from "./FormInputCol.jsx";
import FormCol from "./FormCol.jsx";

export default function FormMain({ setBudget }) {
  function handleChange(event) {
    setBudget((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="flex flex-col   items-center justify-center gap-8">
      <div className="flex flex-col gap-14 sm:grid sm:grid-cols-2">
        <FormCol>
          <FormInputCol title={"Nome"} action={handleChange} name={"nome"} />
          <FormInputCol title={"Email"} action={handleChange} name={"email"} />
          <FormInputCol
            title={"Endereço"}
            action={handleChange}
            name={"endereco"}
          />
        </FormCol>
        <FormCol>
          <FormInputCol
            title={"Tipo de carga"}
            action={handleChange}
            name={"tipo_carga"}
          />
          <FormInputCol
            title={"Pesagem da carga"}
            action={handleChange}
            name={"peso_carga"}
          />
          <FormInputCol
            title={"Mais informações"}
            textarea={true}
            action={handleChange}
            name={"mais_info"}
          />
        </FormCol>
      </div>
      <button className="w-fit rounded-2xl bg-violet-1000 px-10 py-4 text-slate-50">
        Enviar
      </button>
    </div>
  );
}
