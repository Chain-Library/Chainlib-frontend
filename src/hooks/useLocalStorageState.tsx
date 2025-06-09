"use client";

import { useEffect, useState } from "react";

export function useLocalStorageState(
  initialState: string,
  key: string
): [string, (x: string) => void] {
  const [value, setValue] = useState(initialState);

  const setLocalValue = (state: string): void => {
    setValue(() => state);
  };

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setValue(JSON.parse(storedValue))
    }
  }, [key])

  useEffect(
    function () {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setLocalValue];
}