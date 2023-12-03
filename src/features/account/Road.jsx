import Image from "../../../public/road.png";
import bigImage from "../../../public/bigRoad.png";


function Road() {
  return (
    <>
      {" "}
      <img
        src={Image}
        alt="Rodovia"
        className=" mx-auto h-auto max-w-[200px]  sm:hidden"
      />
      <img
        src={bigImage}
        alt="Rodovia"
        className="  h-24 sm:max-w-[300px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] hidden sm:block "
      />
    </>
  );
}

export default Road;
