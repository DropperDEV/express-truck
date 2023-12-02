/* eslint-disable react/prop-types */

export default function SideBySide({ children }) {
  return (
    <section className="mb-32 flex flex-col lg:flex-row  items-center gap-14 :gap-14 lg:gap-0   xl:justify-around     ">
      {children}
    </section>
  );
}
