/* eslint-disable react/prop-types */

export default function Card({ image, altImage, name }) {
  return (
    <div className=" flex w-fit flex-col items-center justify-center gap-10 rounded-2xl m-5 bg-violet-1000 px-8 py-20 font-semibold text-2xl text-slate-50">
      <img src={image} alt={altImage} />
      <p>{name}</p>
    </div>
  );
}
