import Image from "next/image";
import UsingSymbol from "./using-symbol";
import clsx from "clsx";

const PlayerInfo = ({
  isRight,
  name,
  rating,
  avatar,
  symbol,
  isMoveOn,
  seconds,
}) => {
  const getTimerColor = () => {
    if (isMoveOn) {
      return endingTime ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-300";
  };
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondString = String(seconds % 60).padStart(2, "0");
  const endingTime = seconds < 10;

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <div className="flex items-center gap-2 text-start text-teal-600 w-44">
          <Image src={avatar} alt="avatar" height={48} width={48} unoptimized />
          <div className="overflow-hidden">
            <div className="text-lg leading-[1.2] truncate">{name}</div>
            <div className="text-slate-400 text-xs leading-[1.2]">
              Rating: {rating}
            </div>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <UsingSymbol symbol={symbol} />
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

export default PlayerInfo;
