/* eslint-disable react/prop-types */
export default function FormLogin({ children }) {
  return (
    <form
      action=""
      className="flex p-6  flex-col items-center justify-center gap-8 rounded-xl bg-blue-1100 xl:p-20 xl:px-32 lg:p-10 lg:px-16 md:p-6 md:px-10 sm:p-4 sm:px-6 "
    >
      {children}
    </form>
  );
}
