const API_URL = "http://localhost:9000";

export async function getTerms() {
  try {
    const res = await fetch(`${API_URL}/terms`);

    if (!res.ok) throw Error("Failed getting terms");
    const terms = await res.json();
    console.log(terms);
    return terms;
  } catch (error) {
    console.error("Error parsing JSON:", error.message);
    throw error; // Rejoga o erro para lidar com ele no código que chama getTerms
  }
}

