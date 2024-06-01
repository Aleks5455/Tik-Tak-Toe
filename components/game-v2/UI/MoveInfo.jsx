import UsingSymbol from "./using-symbol";

const MoveInfo = ({currentMove, nextMove}) => {
  return (
    <>
      <div className="flex items-center gap-1 text-xl leading-[1.2] semibold ">
        Turn: <UsingSymbol symbol={currentMove} className="w-4 h-4" />
      </div>
      <div className="flex items-center gap-1 text-xs leading-[1.2] text-slate-400 ">
        Next turn: <UsingSymbol symbol={nextMove} className="w-3 h-3" />
      </div>
    </>
  );
};

export default MoveInfo;
