interface UseStorage {
  getItem: (val: string) => string | null;
  setItem: (id: string, val: string) => void;
  removeItem: (val: string) => void;
}

function useStorage(): UseStorage {
  const getItem = (val: string): string | null => {
    const gotItem = localStorage.getItem(val);
    return gotItem;
  };
  const setItem = (id: string, val: string): void => {
    localStorage.setItem(id, val);
  };
  const removeItem = (val: string): void => {
    localStorage.removeItem(val);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
}

export default useStorage;
