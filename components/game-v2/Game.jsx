import BackLink from "./UI/BackLink";
import GameInfo from "./UI/GameInfo";
import GameLayout from "./UI/GameLayout";
import GameTitle from "./UI/GameTitle";
import PlayerInfo from "./UI/PlayerInfo";
import { players } from "./constants";

const Game = () => {
  return (
    <GameLayout
      backLink={<BackLink />}
      title={<GameTitle />}
      gameInfo={
        <GameInfo
          isRatingGame
          playersCount={4}
          timeAmount={"1 minute per turn"}
        />
      }
      playersList={players.map((player, index) => (
        <PlayerInfo
          key={player.id}
          avatar={player.avatar}
          isRight={index % 2 === 1}
          name={player.name}
          rating={player.rating}
          seconds={60}
          symbol={player.symbol}
        />
      ))}
    />
  );
};

export default Game;
