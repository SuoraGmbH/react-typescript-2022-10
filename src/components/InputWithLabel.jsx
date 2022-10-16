import { StyledInput } from "./StyledInput";

export const InputWithLabel = ({
  field,
  label,
  value,
  onChange,
  ...inputProps
}) => {
  return (
    <div className="space-y-6 sm:space-y-5">
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label
          htmlFor={field}
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          {label}
        </label>
        <div className="mt-1 sm:col-span-2 sm:mt-0">
          <StyledInput
            id={field}
            value={value[field]}
            onChange={(event) => {
              onChange((oldValue) => ({
                ...oldValue,
                [field]: event.target.value,
              }));
            }}
            {...inputProps}
          />
        </div>
      </div>
    </div>
  );
};
