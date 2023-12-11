/* eslint-disable react/prop-types */
import Input from "../../ui/Input";
import FormBigTextarea from "./FormBigTextarea";

export default function FormCol({ title, textarea, action, name, value, mask }) {
  return (
    <div className="flex h-fit  w-fit  flex-col justify-center place-self-center">
      <label className=" text-base" htmlFor="">
        <span className=" text-red-700">*</span> {title}
      </label>
      {textarea ? (
        <FormBigTextarea action={action} name={name} value={value} />
      ) : (
        <Input action={action} name={name} value={value} mask={mask} />
      )}
    </div>
  );
}
