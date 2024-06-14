import UiFieldLabel from "./uiFieldLabel";
import UiFieldMessage from "./uiFieldMessage";
import UiFieldInput from "./uiFieldInput";

const UiInput = ({ className, label, required, messager, error, ...inputProps }) => {
  return (
    <div className={className}>
      {label && <UiFieldLabel label={label} required={required} />}
      <UiFieldInput required={required} error={error} {...inputProps} />
      {(messager || error) && <UiFieldMessage messager={messager} error={error} />}
    </div>
  );
};

export default UiInput;
