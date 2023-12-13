import { Helmet } from "react-helmet";
import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../ui/Button";

function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    
    <main className="flex h-screen w-full  items-center justify-center   bg-[url('errorBG.jpg')] bg-cover bg-center bg-no-repeat text-slate-50 ">
      <Helmet>
        <title>Problema em encontrar a página</title>
      </Helmet>
      <div className="flex flex-col items-center   rounded-2xl border-2 gap-10 border-stone-950 bg-transparent  p-16 text-center filter backdrop-blur-sm">
        <h1 className="text-lg text-slate-50 font-semibold bg-violet-1000 p-3 rounded-full ">Página não encontrada</h1>
        <Button action={moveBack} text={"Voltar"} />
      </div>
    </main>
  );
}

export default PageNotFound;
