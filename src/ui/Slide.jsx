/* eslint-disable react/prop-types */

export default function Slide({type, textElement}) {
  if (type === "modern")
    return (
      <>
        <div className=" relative z-10 ml-[25%] w-3/4 overflow-visible py-4 lg:ml-[10%] lg:w-10/12">
          <div className="absolute inset-0 -ml-8 bg-[#033B75] p-8">&nbsp;</div>
        </div>
        <div className="z-1 relative mb-32 bg-stone-950 p-14 text-slate-50">
          <div className="border-l-2 border-slate-50 p-8">
            {textElement}
          </div>
        </div>
      </>
    );
  return (
    <div className=" mb-24 flex items-center justify-center bg-slate-950 p-10 py-16 text-center text-xl font-bold text-slate-50 sm:text-2xl md:text-3xl">
      {textElement}
    </div>
  );
}
