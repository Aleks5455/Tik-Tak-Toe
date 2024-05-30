import Link from "next/link";
import { ArrowIcon } from "./icons/arrow-icon";

const BackLink = () => {
  return (
    <Link href="/" className="flex items-center gap-2 text-xs text-teal-600">
      <ArrowIcon />
      To main page
    </Link>
  );
};
export default BackLink;
