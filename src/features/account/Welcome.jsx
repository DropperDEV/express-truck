/* eslint-disable react/prop-types */

function Welcome({ children, type }) {
  if(type === 'Sign') return <p className=" text-3xl font-semibold">{children}</p>
  return <p className=" lg:text-5xl md:text-4xl  text-3xl xl:text-6xl font-semibold">{children}</p>;
}

export default Welcome;
