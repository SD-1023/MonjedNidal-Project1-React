const API_ENDPOINT = "https://tap-web-1.herokuapp.com/topics";

export const httpRequest = async (path) => {
  try {
    const response = await fetch(`${API_ENDPOINT}${path}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("HTTP request error:", error);
  }
};
