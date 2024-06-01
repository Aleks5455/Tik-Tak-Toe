import clsx from "clsx";
import UsingSymbol from "./using-symbol";

const FieldCell = ({onClick, isWinner, disabled, symbol, i}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      key={i}
      className={clsx(
        "flex items-center justify-center border border-slate-200 -ml-px -mt-px",
        isWinner && "bg-orange-600/10"
      )}
    >
      {symbol && <UsingSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
};

export default FieldCell;
