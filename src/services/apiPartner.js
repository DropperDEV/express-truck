import supabase from "./supabase";

export async function createPartner({
  nome,
  email,
  cnpj,
  cidade_estado,
  empresa,
  quantidade_veiculos,
  quantidade_func,
}) {
  const { data, error } = await supabase
    .from("parceiros")
    .insert([
      {
        nome,
        email,
        empresa,
        cidade_estado,
        cnpj,
        quantidade_veiculos,
        quantidade_func,
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
