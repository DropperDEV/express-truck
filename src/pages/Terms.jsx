/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import Term from "../features/terms/Term";
import { getTerms } from "../services/apiTerms";

export default function Terms() {
  const terms = useLoaderData();

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-semibold uppercase">Nossos Termos</h1>
      <div className="flex flex-col  gap-6 mb-24">
        {terms.map((term) => (
          <Term title={term.title} key={term.title} text={term.text} />
        ))}
      </div>
    </div>
  );
}
export async function loader() {
  const terms = await getTerms();
  return terms;
}
