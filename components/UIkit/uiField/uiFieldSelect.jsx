import clsx from "clsx";

const UiFieldSelect = ({ required, error, ...selectProps }) => {
  return (
    <select
      id="example3"
      required={required}
      className={clsx([
        `
        block w-full rounded-md border shadow-sm
         focus:ring focus:ring-opacity-50
        disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400
        px-2 py-2 text-sm leading-[1.2] outline-0
        `,
        error
          ? "focus:border-orange-600 focus:ring-orange-600/20 border-orange-600"
          : "focus:border-teal-600 focus:ring-teal-600/20 border-gray-300",
      ])}
      {...selectProps}
    />
  );
};

export default UiFieldSelect;