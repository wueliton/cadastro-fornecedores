import { Supplier } from "@/model/supplier";

export type SupplierContextModel = Supplier & { id: string };

export interface FilterContextProps {
  name: string;
  category: string;
  city: string;
  state: string;
}

export type FilterFields = keyof FilterContextProps;

export interface SupplierContextProps {
  suppliers: SupplierContextModel[];
  hasSupplier: boolean;
  filterState: FilterContextProps;
  setFilter: (filter: Partial<FilterContextProps>) => void;
  add: (supplier: Supplier) => void;
  remove: (id: string) => void;
  edit: (id: string, supplier: Partial<Supplier>) => void;
  get: (id?: string) => Supplier | null | undefined;
  searchInputProps: {
    onChange: (value: string) => void;
    value: string;
  };
  hasFilter: boolean;
}
