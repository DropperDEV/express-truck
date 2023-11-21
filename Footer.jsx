import FooterAbout from "./FooterComponents/FooterAbout";
import FooterMenu from "./FooterComponents/FooterMenu";
import FooterSlide from "./FooterComponents/FooterSlide";

export default function Footer() {
  return (
    <footer className=" flex flex-col items-center justify-center text-slate-50   ">
      <FooterSlide>
        <FooterMenu>Inicio</FooterMenu>
        <FooterMenu>Parceiros</FooterMenu>
        <FooterMenu>Área do cliente</FooterMenu>
      </FooterSlide>
      <FooterAbout></FooterAbout>
      <FooterSlide>&nbsp;</FooterSlide>
    </footer>
  );
}
