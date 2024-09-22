import { useCallback, useMemo, useState } from "react";
import { FormFieldsState, UseFormProps } from "./types";

export const useForm = <Form extends Record<string, unknown>>(
  props: UseFormProps<Form>
) => {
  const [formState, setFormState] = useState<FormFieldsState<Form>>(
    {} as FormFieldsState<Form>
  );
  const formValues = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(formState).map(([key, controlValue]) => [
          key,
          controlValue.value,
        ])
      ) as Form,
    [formState]
  );

  const register = (control: keyof Form, required?: boolean) => {
    if (!formState[control]) {
      setFormState((form) => ({
        ...form,
        [control]: {
          value: props?.defaultValues?.[control] ?? "",
          required,
        },
      }));
    }

    return {
      onChange: (value: unknown) => {
        setValue(control, value);
      },
      value: formState[control]?.value,
      required: formState[control]?.required,
      error: formState[control]?.error,
    };
  };

  const formIsValid = () => {
    const formWithErrors = Object.fromEntries(
      Object.entries(formState).map(([key, value]) => [
        key,
        {
          ...value,
          error:
            value.required && value.value === "" ? "Campo obrigatório" : null,
        },
      ])
    ) as FormFieldsState<Form>;

    setFormState(formWithErrors);

    return Object.values(formWithErrors).every((value) => !value.error);
  };

  const getValues = (): Form => {
    return formValues;
  };

  const getValue = (field: keyof Form) => formState[field]?.value;

  const handleSubmit = (onSubmit?: (data: Form) => void) => {
    return () => {
      if (formIsValid()) {
        onSubmit?.(formValues);
      }
    };
  };

  const reset = () => {
    setFormState(
      (form) =>
        Object.fromEntries(
          Object.entries(formState).map(([key, value]) => [
            key,
            {
              ...value,
              value: "",
            },
          ])
        ) as FormFieldsState<Form>
    );
  };

  const setValue = <
    Control extends keyof Form = keyof Form,
    Value = Form[Control]
  >(
    control: Control,
    value: Value
  ) => {
    setFormState((form) => ({
      ...form,
      [control]: {
        ...form[control],
        value,
      },
    }));
  };

  return {
    register,
    reset,
    getValues,
    getValue,
    handleSubmit,
    setValue,
  };
};
