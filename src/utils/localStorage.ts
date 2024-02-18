export const LocalStorageKeys = {
  screenSize: 'screenSize',
} as const;

type TLocalStorageKeys = (typeof LocalStorageKeys)[keyof typeof LocalStorageKeys];

export function getLocalStorageItem<T>(key: TLocalStorageKeys): T {
  try {
    return (JSON.parse(localStorage.getItem(key) ?? '') as T) ?? ('' as T);
  } catch {
    return '' as T;
  }
}

export const setLocalStorageItem = (key: TLocalStorageKeys, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
};

export const removeLocalStorageItem = (key: TLocalStorageKeys) => {
  try {
    return localStorage.removeItem(key);
  } catch {}
};
