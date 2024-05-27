import Image from "next/image";
import avatarSrc from "./avatar1.png";
import clsx from "clsx";

const Profile = ({ className, name, rating, avatar = avatarSrc }) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 text-start text-teal-600",
        className
      )}
    >
      <Image src={avatar} alt="avatar" height={48} width={48} unoptimized />
      <div className="overflow-hidden">
        <div className="text-lg leading-[1.2] truncate">{name}</div>
        <div className="text-slate-400 text-xs leading-[1.2]">
          Rating: {rating}
        </div>
      </div>
    </div>
  );
};

export default Profile;
