import { Supplier } from "@/model/supplier";

export type SupplierFormKey = keyof Supplier;

export type FormFieldsState<Form> = {
  [k in keyof Form]: {
    value: Form[k];
    error?: string | null;
  };
};

export type SupplierFormProps = {
  defaultValue?: Partial<Supplier>;
};
