/* eslint-disable react/prop-types */
export default function Square({ icon, title, text }) {
  return (
    <div className=" flex h-52 w-52 flex-col    items-center justify-center gap-2 place-self-center bg-slate-50 p-6 2xl:h-52 2xl:w-52">
      {icon}
      <p className="text-base font-bold uppercase ">{title}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
}
