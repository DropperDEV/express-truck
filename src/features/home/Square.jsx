/* eslint-disable react/prop-types */
export default function Square({ children }) {
  return (
    <div className=" flex h-52 w-52 gap-2   flex-col items-center justify-center place-self-center bg-slate-50 p-6 2xl:h-52 2xl:w-52">
      {children}
    </div>
  );
}
