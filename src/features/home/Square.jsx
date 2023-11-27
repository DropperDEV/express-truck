/* eslint-disable react/prop-types */
export default function Square({ children }) {
  return (
    <div className=" flex h-64 w-64 flex-col items-center justify-center place-self-center bg-slate-50 p-6 2xl:h-72 2xl:w-72">
      {children}
    </div>
  );
}
