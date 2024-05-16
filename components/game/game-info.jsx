import clsx from "clsx";
import Profile from "../profile/profile";
import { CrossIcon } from "./icons/cross-icon";
import { ZeroIcon } from "./icons/zero-icon";

const GameInfo = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 flex justify-between"
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="relative">
          <Profile className="w-[150px]" />
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
            <CrossIcon />
          </div>
        </div>
        <div className="w-px h-6 bg-slate-200" />
        <div className="text-slate-900 text-lg font-semibold">03:12</div>
      </div>

      <div className="flex gap-3 items-center">
        <div className="text-orange-600 text-lg font-semibold">00:02</div>
        <div className="w-px h-6 bg-slate-200" />
        <div className="relative">
          <Profile className="w-[150px]" />
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
            <ZeroIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
