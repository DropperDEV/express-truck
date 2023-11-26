/* eslint-disable react/prop-types */
export default function Term({ text, title }) {
  return (
    <div className="flex flex-col justify-center mx-5">
      <h2 className="text-lg font-semibold ">
        {title}
      </h2>
      <p className=" ml-5 text-justify  before:content-['•']">
        {text}
      </p>
    </div>
  );
}
