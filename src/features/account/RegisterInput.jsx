/* eslint-disable react/prop-types */

export default function RegisterInput({type,text,action,value}) {
  return (
    <input
        type={type}
        className="w-fit rounded-lg bg-slate-50 px-2  py-2 text-sm focus:outline-none sm:px-6 sm:py-3 sm:text-base lg:w-96 lg:py-5"
        placeholder={text}
        name={name}
        onChange={action}
        value={value}
      />
  )
}
