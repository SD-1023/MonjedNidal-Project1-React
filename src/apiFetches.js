// import { useState, useEffect } from "react";

const API_ENDPOINT = "https://tap-web-1.herokuapp.com/topics";
const cach = {};
export const httpRequest = async (path) => {
  try {
    if (cach[path]) {
      console.log("cached : ", cach[path]);
      return cach[path];
    }
    const response = await fetch(`${API_ENDPOINT}${path}`);
    const data = await response.json();
    cach[path] = data;
    return data;
  } catch (error) {
    console.error("HTTP request error:", error);
  }
};

// export const useHttpRequest = (path) => {
//   const [data, setData] = useState([]);
//   const [debouncedPath, setDebouncedPath] = useState(path);

//   // Replace 300 with your desired debounce delay in milliseconds
//   const debouncedPathValue = useDebounce(path, 300);

//   useEffect(() => {
//     setDebouncedPath(debouncedPathValue);
//   }, [debouncedPathValue]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${API_ENDPOINT}${debouncedPath}`);
//         return await response.json();
//       } catch (e) {
//         console.error(e);
//       }
//     };

//     setData(fetchData());
//   }, [debouncedPath]);

//   return data;
// };
// export const useDebounce = (value, delay) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// };
