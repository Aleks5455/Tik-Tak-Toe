import UIButton from "../UIkit/ui-button";
import { clsx } from "clsx";
import UsingSymbol from "./using-symbol";

const GameField = ({
  className,
  cells,
  currentMove,
  nextMove,
  CellClick,
  winnerSequence,
  winnerSymbol
}) => {
  return (
    <FieldLayout className={className}>
      <MoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <FieldGrid>
        {cells.map((symbol, index) => (
          <FieldCell
            key={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={() => {
              CellClick(index);
            }}
          >
            {symbol && <UsingSymbol symbol={symbol} className="w-5 h-5" />}
          </FieldCell>
        ))}
      </FieldGrid>
    </FieldLayout>
    
  );
};

export default GameField;

const actions = (
  <>
    <UIButton size="medium" type="filled">
      Draw
    </UIButton>
    <UIButton size="medium" type="outline">
      Give up
    </UIButton>
  </>
);

function FieldCell({ children, i, onClick, isWinner, disabled }) {
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
      {children}
    </button>
  );
}

function FieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"
      )}
    >
      {children}
    </div>
  );
}

function MoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex items-center gap-3">
      <div className="mr-auto">
        <div className="text-xl leading-[1.2] semibold flex items-center gap-1">
          Turn: <UsingSymbol symbol={currentMove} className="w-4 h-4" />
        </div>
        <div className="text-xs leading-[1.2] text-slate-400 flex items-center gap-1">
          Next turn: <UsingSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      {actions}
    </div>
  );
}

function FieldGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
      {children}
    </div>
  );
}
