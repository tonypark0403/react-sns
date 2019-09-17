import { useState, useCallback } from "react";

export const useInput = (initValue = null) => {
  const [value, setValue] = useState(initValue);
  const eventHandler = useCallback(e => {
    setValue(e.target.value);
  }, []);
  return [value, eventHandler];
};
