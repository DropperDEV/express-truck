/* eslint-disable react/prop-types */
export default function FormLogin({ children }) {
  return (
    <form
      action=""
      className="flex flex-col items-center justify-center gap-8 rounded-xl bg-blue-1100 p-20 px-32  "
    >
      {children}
    </form>
  );
}
