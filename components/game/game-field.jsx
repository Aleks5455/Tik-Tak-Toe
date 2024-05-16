import { clsx } from "clsx";
import { ZeroIcon } from "./icons/zero-icon";
import { CrossIcon } from "./icons/cross-icon";
import UIButton from "../UIkit/ui-button";

const cells = new Array(19 * 19).fill(null);

const GameField = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="mr-auto">
          <div className="text-xl leading-[1.2] semibold flex items-center gap-1">
            Turn: <ZeroIcon className="w-5 h-5" />
          </div>
          <div className="text-xs leading-[1.2] text-slate-400 flex items-center gap-1">
            Next turn: <CrossIcon />
          </div>
        </div>
        <UIButton size="medium" type="filled">
          Draw
        </UIButton>
        <UIButton size="medium" type="outline">
          Give up
        </UIButton>
      </div>
      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
        {cells.map((_, i) => (
          <button
            key={i}
            className="flex items-center justify-center border border-slate-200 -ml-px -mt-px"
          ></button>
        ))}
      </div>
    </div>
  );
};

export default GameField;
