import supabase from "./supabase";

export async function createBudget({
  nome,
  email,
  endereco,
  tipo_carga,
  peso_carga,
  mais_info,
}) {
  const { data, error } = await supabase
    .from("orcamento")
    .insert([
      {
        nome,
        email,
        endereco,
        tipo_carga,
        peso_carga,
        mais_info,
      },
    ])
    .select();

  if (data) {
    alert("Formulário enviado");
  }
  if (error) {
    alert("Não foi possível enviar.");
  }
}
