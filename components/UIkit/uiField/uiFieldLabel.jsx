import clsx from "clsx";

const UiFieldLabel = ({ label, required }) => {
  return (
    <label
      for="example2"
      class={clsx(
        required && "after:text-orange-600 after:content-['*']",
        "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5 "
      )}
    >
      {label}
    </label>
  );
};

export default UiFieldLabel;
