/* eslint-disable react/prop-types */
export default function CheckVisible({ onChange, id, name, text }) {
  return (
    <div className="  flex gap-2 sm:mr-24  lg:mr-48">
      <input
        onChange={ onChange }
        id={id}
        type="checkbox"
        name={name}
        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
      <p className=" text-sm text-slate-50">{text}</p>
    </div>
  );
}
