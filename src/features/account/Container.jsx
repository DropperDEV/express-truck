import Image from "../../../public/container.png";
import bigImage from "../../../public/bigContainer.png";

export default function Container() {
  return (
    <>
      <img src={Image} alt="Containeres" className="ml-1 sm:hidden" />
      <img src={bigImage} alt="Containeres" className="ml-1 hidden sm:block sm:max-w-[400px] h-52" />
    </>
  );
}
