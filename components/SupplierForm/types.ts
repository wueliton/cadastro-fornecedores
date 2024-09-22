import { Supplier } from "@/model/supplier";

export type SupplierFormProps = {
  value?: Supplier;
  onSubmit?: (supplier: Supplier) => void;
  onCancel?: () => void;
  onRemove?: () => void;
};
