/* eslint-disable react/prop-types */
export default function AccountBox({ text, icon }) {
  return (
    <div className="mb-14 flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-1100 px-10 py-32 md:px-44">
      {icon}
      <p className="text-base">{text}</p>
    </div>
  );
}
