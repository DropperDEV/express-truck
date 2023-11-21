/* eslint-disable react/prop-types */

export default function Card({ image, altImage, name }) {
  return (
    <div className=" m-5 flex w-52  flex-col items-center justify-center  gap-10 rounded-2xl bg-violet-1000 px-8 py-20 text-2xl font-semibold text-slate-50">
      <img src={image} alt={altImage} />
      <p>{name}</p>
    </div>
  );
}
