import { StarIcon } from "./icons/star-icon";
import { PlayerIcon } from "./icons/player-icon";
import { ClockIcon } from "./icons/clock-icon";

const GameInfo = ({ playersCount, isRatingGame, timeAmount }) => {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-400">
      {isRatingGame && <StarIcon />}
      <div className="flex items-center gap-1">
        <PlayerIcon />
        {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <ClockIcon />{timeAmount}
      </div>
    </div>
  );
};

export default GameInfo;
