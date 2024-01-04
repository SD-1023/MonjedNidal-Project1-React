export const useLocalStorage = () => {
  return {
    setItem: (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.error(e);
      }
    },
    getItem: (key) => {
      try {
        let item = localStorage.getItem(key);
        return JSON.parse(item);
      } catch (e) {
        console.error(e);
      }
    },
  };
};
