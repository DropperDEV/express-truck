/* eslint-disable react/prop-types */


export default function Contact({image,text,content}) {
  return (
    <div>
      <p className="flex gap-2 md:text-xl text-base font-semibold ">
        <span>
          {image}
        </span>
        {text}
      </p>
      <p className=" text-sm md:text-xl" >{content}</p>
    </div>
  );
}
