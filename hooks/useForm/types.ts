export type FormFieldsState<Form> = {
  [k in keyof Form]: {
    value: Form[k];
    error?: string | null;
    required?: boolean;
  };
};

export type UseFormProps<Form> =
  | {
      defaultValues?: Partial<Form>;
    }
  | undefined;
