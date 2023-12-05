import supabase from '../supabase';

export async function getUsers() {
  try {
    const { data, error } = await supabase.from('users').select('*');
    
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
