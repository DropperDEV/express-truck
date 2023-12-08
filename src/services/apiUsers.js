import supabase from "./supabase";

export async function createUser(user) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
      options: {
        data: {
          cpf: user.cpf,
        },
      },
    });
    if (error) {
      console.error("Error creating user");
    }
    if (data) {
      console.log(data);
    }
  } catch (error) {
    console.error(error);
    throw new Error("An unexpected error occurred while creating the user");
  }
  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);
  });
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function updateCPF(cpf) {
  try {
    const { data, error } = await supabase.auth.updateUser({
      data: { cpf: cpf },
    });
    if (data) {
      console.log(data);
    }
    if (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
    throw new Error("An unexpected error occurred while updating user data");
  }
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function updateCurrentUser({ email, address,cpf,phone }) {
  let updateData;
  updateData = { data: { email, address, cpf, phone } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (data) console.log(data);
  
}
