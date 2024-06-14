import { useEffect, useState } from "react";

export function useNow(interval, enabled) {
  const [now, setNow] = useState();

  useEffect(() => {
    if (!enabled) {
      setNow(undefined);
      return;
    }
    const int = setInterval(() => {
      setNow(Date.now());
    }, interval);

    return () => {
      clearInterval(int);
    };
  }, [interval, enabled]);

  return now;
}

export function useInterval(interval, enabled, callBack) {
    useEffect(() => {
        if (!enabled) {
          return ;
        }
        const int = setInterval(() => {
            callBack(Date.now());
        }, interval);
    
        return () => {
          clearInterval(int);
        };
      }, [interval, enabled, callBack]);
}