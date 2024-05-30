const GameLayout = ({ backLink, title, gameInfo, playersList }) => {
  return (
    <div>
      <div className="pl-2">
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div className="bg-white rounded-2xl shadow-md mt-4 px-8 py-4 gap-3 justify-between grid grid-cols-2">
        {playersList}
      </div>
    </div>
  );
};

export default GameLayout;
