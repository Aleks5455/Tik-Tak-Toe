import UiFieldLabel from "./uiFieldLabel";
import UiFieldMessage from "./uiFieldMessage";
import UiFieldSelect from "./uiFieldSelect";

const UiSelectField = ({
  className,
  label,
  required,
  messager,
  error,
  ...selectProps
}) => {
  return (
    <div className={className}>
      {label && <UiFieldLabel label={label} required={required} />}
      <UiFieldSelect required={required} error={error}>
        {playersCount.map((playersCount) => (
          <option key={playersCount.value} value={playersCount.value}>
            {playersCount.label}
          </option>
        ))}
      </UiFieldSelect>
      {(messager || error) && (
        <UiFieldMessage messager={messager} error={error} />
      )}
    </div>
  );
};

export default UiSelectField;
const playersCount = [
  { value: "2", label: "2 Player" },
  { value: "4", label: "4 Player" },
];