import Image from "next/image";
import avatarSrc from "./avatar1.png";
import clsx from "clsx";

const Profile = (className) => {
  return (
    <div className={clsx("flex items-center gap-2 text-start text-teal-600", className)}>
        <Image
          src={avatarSrc}
          alt="avatar"
          height={48}
          width={48}
          unoptimized
        />
        <div>
          <div className="text-lg leading-[1.2]">Aleks5455</div>
          <div className="text-slate-400 text-xs leading-[1.2]">
            Rating: 5455
          </div>
        </div>
      </div>
  )
}

export default Profile