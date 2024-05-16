import Image from "next/image";
import logoSrc from "./logo.svg";
import Profile from "../profile/profile";
import { ArrowDownIcon } from "./arrow-down-icon";
import UIButton from "../UIkit/ui-button";

const Header = () => {
  return (
    <header className="flex h-[100px] items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="X|O online" height={53} width={163} />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UIButton className="w-[150px]" size="big" type="filled">
        Play
      </UIButton>
      <button className="flex items-center gap-2 ml-auto text-teal-600">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
};

export default Header;
