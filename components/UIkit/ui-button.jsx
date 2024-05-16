import clsx from "clsx";

const UIButton = ({ children, className, size, type }) => {
  const btnClass = clsx(
    "transition-colors",
    className,
    {
      medium: "rounded text-sm leading-[1.2] px-6 py-[7.5px]",
      big: "rounded-lg text-2xl leading-[1.2] px-5 py-[7.5px]",
    }[size],
    {
      filled: "bg-teal-600 hover:bg-teal-500 text-white",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[type]
  );

  return <button className={btnClass}>{children}</button>;
};

export default UIButton;
