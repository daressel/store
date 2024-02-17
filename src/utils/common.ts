export const getLocalStorageItem = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) ?? '');
  } catch {
    return null;
  }
};

export const setLocalStorageItem = (key: string, value: unknown) => {
  try {
    console.log(123123);
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
};

export const removeLocalStorageItem = (key: string) => {
  try {
    return localStorage.removeItem(key);
  } catch {}
};
