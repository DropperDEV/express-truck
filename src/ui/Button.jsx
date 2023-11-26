/* eslint-disable react/prop-types */

export default function Button({text, login}) {
  if(login === true) return  <button className="bg-slate-50 text-stone-950 py-4 px-10 rounded-2xl">{text}</button>
  return (
    <button className="bg-violet-1000 text-slate-50 py-4 px-10 rounded-2xl">{text}</button>
  )
}
