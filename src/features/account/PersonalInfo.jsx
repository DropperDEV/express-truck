/* eslint-disable react/prop-types */

export default function PersonalInfo({ infoName, info, action, active }) {
  
  return (
    <div className="flex flex-col justify-center ">
      <p className="uppercase">{infoName}</p>
      {active === true ? (
        <input value={info} readOnly onChange={action} />
      ) : (
        <input value={info} onChange={action} />
      )}
    </div>
  );
}
