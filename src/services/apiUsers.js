import supabase from "../supabase";

export async function createUser(user) {
  try {
    await supabase
      .from("users")
      .insert({ email: user.email, password: user.password, cpf: user.cpf });
    await getUsers();
  } catch (error) {
    console.error(error);
    throw new Error("An unexpected error occurred while creating the user");
  }
}

export async function getUsers() {
  try {
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      console.error(error);
      throw new Error("User couldn't be loaded");
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("An unexpected error occurred while fetching user data");
  }
}

export async function updateUser(userEdit, id) {
  try {
    await supabase
      .from("users")
      .update({
        email: userEdit.email,
        address: userEdit.address,
        cpf: userEdit.cpf,
        phone: userEdit.phone,
      })
      .eq("id", id);

    await getUsers();
  } catch (error) {
    console.error(error);
    throw new Error("An unexpected error occurred while updating user data");
  }
}

export async function loginUser(user) {
  event.preventDefault();

  try {
    const { error } = await supabase.auth.signUp({
      email: user.email,
      cpf: user.cpf,
      password: user.password,
    });
    console.log(user);
    if (error) {
      console.error("Erro ao fazer login:", error.message);
    } else {
      console.log("Usuário autenticado com sucesso:", user);
    }
  } catch (error) {
    console.error("Erro inesperado:", error.message);
  }
}
