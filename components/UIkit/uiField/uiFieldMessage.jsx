import clsx from "clsx";

const UiFieldMessage = ({ messager, error }) => {
  const message = error ?? messager;
  if (!message) return null;

  return (
    <p
      class={clsx(
        "mt-1 text-sm",
        error ? "text-orange-600" : "text-slate-400"
      )}
    >
      {message}
    </p>
  );
};

export default UiFieldMessage;