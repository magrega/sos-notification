import { useRef, useState } from "react";

export const useCountdown = () => {
  const sosCountdown = process.env.NODE_ENV === "production" ? 5 : 2;
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const [seconds, setSeconds] = useState(sosCountdown);
  const [isCountdown, setCountdown] = useState(false);

  const cancelCountdown = () => {
    clearInterval(intervalRef.current);
    setCountdown(false);
    setSeconds(sosCountdown);
  };

  const startCountdown = (onTimeout: () => void) => {
    setCountdown(true);
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) {
          cancelCountdown();
          onTimeout();
          return sosCountdown;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return {
    intervalRef,
    seconds,
    setSeconds,
    isCountdown,
    setCountdown,
    cancelCountdown,
    startCountdown,
  };
};
