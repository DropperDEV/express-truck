/* eslint-disable react/prop-types */

export default function PersonalInfo({ infoName, info, name, action, edit, type }) {
  return (
    <div className="flex flex-col justify-center ">
      <p className="uppercase">{infoName}</p>
      {edit === false ? (
        <input type={type} defaultValue={info} name={name} onChange={action} disabled className="bg-gray-1100" />
      ) : (
        <input type={type} defaultValue={info} name={name} onChange={action}  className="p-1"/>
      )}
    </div>
  );
}
