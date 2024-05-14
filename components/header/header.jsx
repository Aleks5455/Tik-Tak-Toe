import Image from "next/image";
import logoSrc from "./logo.svg";
import avatarSrc from "./avatar1.png";

const Header = () => {
  return (
    <header className="flex h-[100px] items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="X|O online" height={53} width={163} />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <button className="w-[180px] px-5 py-[7.5px] bg-teal-600 hover:bg-teal-500 transition-colors text-white rounded-lg text-2xl leading-[1.2]">
        Играть
      </button>
      <button className="flex items-center gap-2 ml-auto text-start text-teal-600 hover:text-teal-500 transition-colors">
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
            Рейтинг: 5455
          </div>
        </div>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.18753 12.75C9.04368 12.75 8.89968 12.6951 8.78985 12.5852L3.16485 6.96022C2.94505 6.74043 2.94505 6.3845 3.16485 6.16485C3.38464 5.94519 3.74057 5.94505 3.96022 6.16485L9.18753 11.3922L14.4148 6.16485C14.6346 5.94505 14.9906 5.94505 15.2102 6.16485C15.4299 6.38464 15.43 6.74057 15.2102 6.96022L9.58522 12.5852C9.47539 12.6951 9.33139 12.75 9.18753 12.75Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
