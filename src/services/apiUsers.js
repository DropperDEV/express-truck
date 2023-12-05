import supabase from "../supabase";

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

export async function createUser(user) {
  try {
    await supabase
      .from("users")
      .insert({ email: user.email, password: user.password, cpf: user.cpf });
    await getUsers(); // Optional: You may want to await getUsers() if needed.
  } catch (error) {
    console.error(error);
    throw new Error("An unexpected error occurred while creating the user");
  }
}
