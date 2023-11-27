/* eslint-disable react/prop-types */

function Welcome({ children, type }) {
  if(type === 'Sign') return <p className=" text-6xl font-semibold">{children}</p>
  return <p className=" text-6xl font-semibold">{children}</p>;
}

export default Welcome;
