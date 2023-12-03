/* eslint-disable react/prop-types */

export default function PersonalInfo({infoName, info}) {
  return (
    <div className="flex flex-col justify-center ">
              <p className="uppercase">{infoName}</p>
              <p>{info}</p>
            </div>
  )
}
