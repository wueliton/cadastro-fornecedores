import { useSupplierContext } from "@/context/useSupplierContext";
import { useForm } from "../useForm";
import { FilterFormProps } from "./types";
import { useFilterModalContext } from "@/context/useFilterModalContext";

export const useFilterForm = () => {
  const { filterState, setFilter } = useSupplierContext();
  const { close } = useFilterModalContext();
  const { register, handleSubmit, reset } = useForm<FilterFormProps>({
    defaultValues: filterState,
  });

  const onSubmit = (filter: FilterFormProps) => {
    setFilter(filter);
    close();
  };

  const onClear = () => {
    reset();
    setFilter({
      name: "",
      category: "",
      city: "",
      state: "",
    });
    close();
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    onClear,
  };
};
