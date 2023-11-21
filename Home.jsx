import Card from "./Card";

export default function Home() {
  return (
    <section className='flex flex-row'>
      <Card image="user.png" altImage="Usuário" name="Área Cliente" />
      <Card image="terms.jpg" altImage="Termos" name="Termos" />
      <Card image="partners.jpg" altImage="Parceiros" name="Parceiros" />
    </section>
  );
}
