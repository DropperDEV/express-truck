/* eslint-disable react/prop-types */
import { IMaskInput } from "react-imask";

export default function Input({
  inputType,
  text,
  name,
  action,
  type,
  value,
  onlyRead,
  mask,
}) {
  if (onlyRead === true)
    return (
      <IMaskInput
        type={type}
        defaultValue={value}
        name={name}
        onChange={action}
        disabled
        className="bg-gray-1100"
      />
    );

  if (onlyRead === false)
    return (
      <IMaskInput
        mask={mask}
        type={type}
        defaultValue={value}
        name={name}
        onChange={action}
        className="p-1"
      />
    );

  if (inputType === "CPF")
    return (
      <IMaskInput
        mask="000.000.000-00"
        placeholder="Digite o seu CPF"
        className="w-fit rounded-lg bg-slate-50 px-2  py-2 text-sm focus:outline-none sm:px-6 sm:py-3 sm:text-base lg:w-96 lg:py-5"
        onChange={action}
      />
    );
  if (inputType === "maWidth")
    return (
      <input
        type={type}
        name={name}
        value={value}
        className="w-fit rounded-lg bg-gray-1000  px-14 py-3  focus:outline-none  md:px-24  "
        placeholder={text}
        onChange={action}
      />
    );
  return (
    <input
      name={name}
      value={value}
      placeholder={text}
      className="w-fit bg-gray-1000 p-1 sm:px-8 sm:py-2"
      onChange={action}
    />
  );
}
