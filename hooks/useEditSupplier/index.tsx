import { useState } from "react";
import { EditSupplierProps } from "./types";
import { useSupplierContext } from "@/context/useSupplierContext";
import { useRouter } from "expo-router";
import { Supplier } from "@/model/supplier";
import { Linking } from "react-native";

export const useEditSupplier = ({ id }: EditSupplierProps) => {
  const router = useRouter();
  const [isEditingState, setIsEditingState] = useState(false);
  const { get, remove, edit } = useSupplierContext();
  const supplier = get(id as string);

  const handleCancelEdit = () => {
    setIsEditingState(false);
  };

  const handleEdit = () => {
    setIsEditingState(true);
  };

  const handleSubmit = (supplier: Supplier) => {
    edit(id as string, supplier);
    router.push(`/supplier/${id}`);
  };

  const handleRemove = () => {
    remove(id as string);
    router.push("/");
  };

  const handleCallSupplier = async () => {
    try {
      await Linking.openURL(`tel:+55${supplier?.phone.replace(/\D/g, "")}`);
    } catch (err) {}
  };

  return {
    isEditing: isEditingState,
    supplier: (supplier ?? {}) as Supplier,
    onEdit: handleEdit,
    onCancel: handleCancelEdit,
    onRemove: handleRemove,
    onSubmit: handleSubmit,
    onCall: handleCallSupplier,
  };
};
