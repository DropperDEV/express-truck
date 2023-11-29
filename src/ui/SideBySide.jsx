/* eslint-disable react/prop-types */

export default function SideBySide({ children }) {
  return (
    <section className="mb-32 flex flex-col lg:flex-row  items-center gap-14 md:gap-14 lg:gap-0   md:justify-around     ">
      {children}
    </section>
  );
}
