import clsx from "clsx";

const UiFieldInput = ({ required, error, ...inputProps }) => {
  return (
    <input
      type="email"
      id="example2"
      required={required}
      className={clsx([
        `
        block w-full rounded-md  shadow-sm
         focus:ring  focus:ring-opacity-50
        disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-slate-400
        px-2 py-2 text-sm leading-[1.2] outline-0 border"
        `,
        error
          ? "focus:border-orange-600 focus:ring-orange-600/20 border-orange-600"
          : "focus:border-teal-600 focus:ring-teal-600/20 border-slate-200",
      ])}
      {...inputProps}
    />
  );
};

export default UiFieldInput;
