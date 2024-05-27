import clsx from "clsx";
import { symbols } from "./constants";
import avatarSrc1 from "./profilePictures/manAvatar.png";
import avatarSrc2 from "./profilePictures/womanAvatar.png";
import PlInfo from "./PlInfo";

const players = [
  {
    id: 1,
    name: "Aleks5455",
    rating: 5455,
    avatar: avatarSrc1,
    symbol: symbols.cross,
  },
  {
    id: 2,
    name: "Akels6566",
    rating: 6566,
    avatar: avatarSrc2,
    symbol: symbols.zero,
  },
  {
    id: 3,
    name: "Askel7277",
    rating: 9324,
    avatar: avatarSrc1,
    symbol: symbols.triangle,
  },
  {
    id: 4,
    name: "Aleks191111",
    rating: 9134,
    avatar: avatarSrc2,
    symbol: symbols.square,
  },
];

const GameInfo = ({
  className,
  playersCount,
  currentMove,
  isWinner,
  onPlayerTimeOver,
}) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 gap-3 justify-between grid grid-cols-2"
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlInfo
          key={player.id}
          plInf={player}
          isRight={index % 2 === 1}
          onTimeOver={() => onPlayerTimeOver(player.symbol)}
          isMoveOn={currentMove === player.symbol && !isWinner}
        />
      ))}
    </div>
  );
};

export default GameInfo;
