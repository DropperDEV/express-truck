import FormInputCol from "./FormInputCol.jsx";
import Button from "./../../ui/Button";
import FormCol from "./FormCol.jsx";

export default function FormMain() {
  return (
    <form className="flex flex-col   items-center justify-center gap-8">
      <div className="sm:grid sm:grid-cols-2 gap-20">
        <FormCol>
          <FormInputCol title={"Nome"} />
          <FormInputCol title={"Tipo de carga"} />
          <FormInputCol title={"Endereço"} />
        </FormCol>
        <FormCol>
          <FormInputCol title={"Pesagem da carga"} />
          <FormInputCol title={"Mais informações"} textarea={true} />
        </FormCol>
      </div>
      <Button text={"Enviar"} />
    </form>
  );
}
