/* eslint-disable react/prop-types */
export default function FooterSlide({ children }) {
  return (
    <div className=" grid w-full grid-cols-3 gap-2 bg-blue-1000 py-6 text-lg sm:gap-0 sm:text-xl">
      {children}
    </div>
  );
}
