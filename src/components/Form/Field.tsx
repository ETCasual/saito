import { Field, useFormikContext } from "formik";

interface TextFieldProps<T> {
  label: string;
  formikKey: keyof T;
  disabled: boolean;
  // as?: string;
  // options?: { label: string; value: string }[];
}

export const TextField = <T,>({
  label,
  formikKey,
  disabled,
  // as,
  // options,
}: TextFieldProps<T>) => {
  const { errors } = useFormikContext<T>();
  return (
    <div className="flex w-full max-w-[400px] flex-col font-montserrat">
      <label htmlFor={String(formikKey)} className="mb-1 text-xl">
        {label}
      </label>
      <Field
        disabled={disabled}
        name={formikKey}
        className="border border-black bg-gray-300/60 px-1 py-1 focus-within:outline-none"
      />
      <div className="font-made min-h-[24px] w-full py-1 pr-2 text-right text-xs text-red-600">
        {errors[formikKey] && String(errors[formikKey])}
      </div>
    </div>
  );
};
