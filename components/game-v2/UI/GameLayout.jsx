const GameLayout = ({
  backLink,
  title,
  gameInfo,
  playersList,
  moveInfo,
  actions,
  fieldCells
}) => {
  return (
    <div className="pb-10">
      <div className="pl-2">
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div className="bg-white rounded-2xl shadow-md mt-4 px-8 py-4 gap-3 justify-between grid grid-cols-2">
        {playersList}
      </div>
      <div className="bg-white rounded-2xl shadow-md mt-6 px-8 pt-5 pb-7">
        <div className="flex items-center gap-3">
          <div className="mr-auto">{moveInfo}</div>
          {actions}
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
          {fieldCells}
        </div>
      </div>
    </div>
  );
};

export default GameLayout;
