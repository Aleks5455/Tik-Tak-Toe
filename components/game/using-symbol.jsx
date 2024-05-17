import { symbols } from "./constants";
import { CrossIcon } from "./icons/cross-icon";
import { ZeroIcon } from "./icons/zero-icon";
import { TriangleIcon } from "./icons/triangle-icon";
import { SquareIcon } from "./icons/square-icon";

const UsingSymbol = ({ symbol, className }) => {
  const Icon =
    {
      [symbols.cross]: CrossIcon,
      [symbols.zero]: ZeroIcon,
      [symbols.triangle]: TriangleIcon,
      [symbols.square]: SquareIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
};

export default UsingSymbol;
