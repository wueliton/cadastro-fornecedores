import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  SupplierContextProps,
  SupplierContextModel,
  FilterContextProps,
} from "./types";
import * as Crypto from "expo-crypto";
import { Supplier } from "@/model/supplier";

const SupplierContext = createContext<SupplierContextProps>(
  {} as SupplierContextProps
);

export const SupplierProvider = ({ children }: PropsWithChildren) => {
  const [suppliersState, setSuppliersState] = useState<SupplierContextModel[]>([
    {
      id: Crypto.randomUUID(),
      name: "Floricultura Serra",
      phone: "(11) 90000-0000",
      category: "Floricultura",
      address: "Rua sem saída",
      number: "1",
      complement: "",
      city: "Guarulhos",
      state: "SP",
      cep: "00000-000",
      image: "https://reactnative.dev/docs/assets/p_cat1.png",
    },
  ]);
  const [filterState, setFilterState] = useState<FilterContextProps>({
    name: "",
    category: "",
    city: "",
    state: "",
  });

  const suppliersResult = useMemo(
    () =>
      suppliersState.filter(
        (supplier) =>
          supplier.name
            .toLowerCase()
            .includes((filterState.name ?? "").toLowerCase()) &&
          supplier.category
            .toLowerCase()
            .includes((filterState.category ?? "").toLowerCase()) &&
          supplier.city
            .toLowerCase()
            .includes((filterState.city ?? "").toLowerCase()) &&
          supplier.state
            .toLowerCase()
            .includes((filterState.state ?? "").toLowerCase())
      ),
    [suppliersState, filterState]
  );

  const handleAdd = (supplier: Supplier) => {
    setSuppliersState((suppliers) => [
      ...suppliers,
      { ...supplier, id: Crypto.randomUUID() },
    ]);
  };

  const handleRemove = (uuid: string) => {
    setSuppliersState((suppliers) =>
      suppliers.filter((supplier) => supplier.id !== uuid)
    );
  };

  const handleEdit = (uuid: string, updateSupplier: Partial<Supplier>) => {
    setSuppliersState((suppliers) =>
      suppliers.map((supplier) =>
        supplier.id === uuid ? { ...supplier, ...updateSupplier } : supplier
      )
    );
  };

  const handleGet = (uuid?: string) => {
    return suppliersState.find((supplier) => supplier.id === uuid);
  };

  const handleChangeFilter = (filter: Partial<FilterContextProps>) => {
    setFilterState((state) => ({
      ...state,
      ...filter,
    }));
  };

  const searchInputProps = {
    onChange: (value: string) => {
      setFilterState((state) => ({
        ...state,
        name: value,
      }));
    },
    value: filterState.name,
  };

  const hasFilter = useMemo(
    () => Object.values(filterState).some((value) => value !== ""),
    [filterState]
  );

  return (
    <SupplierContext.Provider
      value={{
        suppliers: suppliersResult,
        hasSupplier: Boolean(suppliersState.length),
        edit: handleEdit,
        add: handleAdd,
        remove: handleRemove,
        get: handleGet,
        filterState: filterState,
        setFilter: handleChangeFilter,
        searchInputProps,
        hasFilter,
      }}
    >
      {children}
    </SupplierContext.Provider>
  );
};

export const useSupplierContext = () => {
  return useContext(SupplierContext);
};
