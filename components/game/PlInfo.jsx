import React, { useEffect, useState } from "react";
import Profile from "../profile/profile";
import UsingSymbol from "./using-symbol";
import clsx from "clsx";

const PlInfo = ({ plInf, isRight, isMoveOn, onTimeOver }) => {

  const [seconds, setSeconds] = useState(60);
  
  useEffect(() => {
    if (isMoveOn) {
      const interval = setInterval(() => {
        setSeconds((seconds) => Math.max(seconds - 1, 0));
      }, 1000);

      return () => {
        clearInterval(interval);
        setSeconds(60);
      };
    }
  }, [isMoveOn]);

    useEffect(() => {
      if (seconds === 0) {
        onTimeOver();
      }
    }, [seconds])

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondString = String(seconds % 60).padStart(2, "0");

  const endingTime = seconds < 10;

  const getTimerColor = () => {
    if (isMoveOn) {
      return endingTime ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-300";
  };

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-[150px]"
          name={plInf.name}
          rating={plInf.rating}
          avatar={plInf.avatar}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <UsingSymbol symbol={plInf.symbol} />
        </div>
      </div>
      <div className={clsx("w-px h-6 bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          " text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor()
        )}
      >
        {minutes}:{secondString}
      </div>
    </div>
  );
};

export default PlInfo;
