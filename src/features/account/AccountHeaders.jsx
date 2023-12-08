import Road from './Road';

export default function AccountHeaders() {
  return (
    <div className="my-10 flex w-80 items-center justify-center  overflow-hidden rounded-xl sm:w-9/12">
      <div className=" lg:1/4 w-1/2 rounded-xl  rounded-r-none bg-gray-1100 px-2 py-5  md:w-1/3 xl:w-1/5">
        <h1 className=" text-xl font-bold uppercase sm:text-2xl md:text-3xl ">
          Bem Vindo
        </h1>
        <p className=" text-base ">Novamente</p>
      </div>
      <Road />
    </div>
  );
}
