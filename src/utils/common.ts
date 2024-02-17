export const LocalStorageKeys = {
  screenSize: 'screenSize',
} as const;

type TLocalStorageKeys = (typeof LocalStorageKeys)[keyof typeof LocalStorageKeys];

export const getLocalStorageItem = (key: TLocalStorageKeys) => {
  try {
    return localStorage.getItem(key) ?? '';
  } catch {
    return '';
  }
};

export const setLocalStorageItem = (key: TLocalStorageKeys, value: unknown) => {
  try {
    console.log(123123);
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
};

export const removeLocalStorageItem = (key: TLocalStorageKeys) => {
  try {
    return localStorage.removeItem(key);
  } catch {}
};
