import Link from "next/link";
import { ArrowIcon } from "./icons/arrow-icon";
import { StarIcon } from "./icons/star-icon";
import { PlayerIcon } from "./icons/player-icon";
import { ClockIcon } from "./icons/clock-icon";

const Title = () => {
  return (
    <div className="pl-2">
      <Link href="/" className="flex items-center gap-2 text-xs text-teal-600">
        <ArrowIcon />
        To main page
      </Link>
      <h1 className="text-4xl leading-[1.2]">Tik Tak Toe</h1>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <StarIcon />
        <div className="flex items-center gap-1">
          <PlayerIcon />2
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon />4 min per turn
        </div>
      </div>
    </div>
  );
};

export default Title;
