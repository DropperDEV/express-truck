/* eslint-disable react/prop-types */
import  Input from "../../ui/Input";
import FormBigTextarea from "./FormBigTextarea";

export default function FormCol({title, textarea}) {
  return (
    <div className="flex h-fit  w-fit  flex-col justify-center place-self-center">
      <label className=" text-base" htmlFor="">
        <span className=" text-red-700">*</span> {title}
      </label>
     {textarea ? <FormBigTextarea/> : <Input/>}
    </div>
  );
}
