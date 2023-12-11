import FormInputCol from "./FormInputCol.jsx";
import Button from "./../../ui/Button";
import FormCol from "./FormCol.jsx";

export default function FormMain() {
  return (
    <div className="flex flex-col   items-center justify-center gap-8">
      <div className="flex flex-col gap-14 sm:grid sm:grid-cols-2">
        <FormCol>
          <FormInputCol title={"Nome"} />
          <FormInputCol title={"Email"} />
          <FormInputCol title={"Endereço"} />
        </FormCol>
        <FormCol>
          <FormInputCol title={"Tipo de carga"} />
          <FormInputCol title={"Pesagem da carga"} />
          <FormInputCol title={"Mais informações"} textarea={true} />
        </FormCol>
      </div>
      <Button text={"Enviar"} />
    </div>
  );
}
