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

// import { useState, useEffect } from "react";

// const useHttpRequest = (path) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${API_ENDPOINT}${path}`);
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error);
//       }
//     };

//     fetchData();
//   }, [path]);

//   return { data, error };
// };
