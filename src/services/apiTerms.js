import supabase from "./supabase";


export async function getTerms() {
  let { data: terms, error } = await supabase.from("terms").select("*");
  if (error) throw new Error(error.message);
  return terms;
}
