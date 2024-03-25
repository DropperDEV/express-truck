import Button from "../../ui/Button";
import GoTo from "./GoTo";

/* eslint-disable react/prop-types */
export default function RegisterConfirm({ title, buttonText, backText }) {
  return (
    <div className="mt-20 flex  flex-col rounded-xl bg-blue-1100 p-10 text-slate-50">
      <div className="flex w-fit flex-col justify-center items-center gap-2 ">
        <h2 className="text-2xl font-bold lg:text-3xl max-w-[200px] text-left mb-5">{title}</h2>
        <Button text={buttonText} login={true} />
        <GoTo text={backText} route="/express-truck/" />
      </div>
    </div>
  );
}
