import { StyledInput } from "./StyledInput";

type Props<
  Field extends string,
  FormData extends { [key in Field]: string }
> = {
  field: Field;
  label: string;
  value: FormData;
  onChange: (callback: (oldValue: FormData) => FormData) => void;
} & Omit<React.ComponentProps<typeof StyledInput>, "id" | "value" | "onChange">;

export const InputWithLabel = <
  Field extends string,
  FormData extends { [key in Field]: string }
>({
  field,
  label,
  value,
  onChange,
  ...inputProps
}: Props<Field, FormData>) => {
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
