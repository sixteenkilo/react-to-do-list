export const get = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    if (!item) return null;
    return JSON.parse(item) as T;
};

export const save = <T>(key: string, value: T[]): void => {
    localStorage.setItem(key, JSON.stringify(value));
};
