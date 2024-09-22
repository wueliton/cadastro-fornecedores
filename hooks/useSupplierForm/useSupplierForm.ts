import * as ImagePicker from "expo-image-picker";
import { Supplier } from "@/model/supplier";
import { useSupplierContext } from "../../context/useSupplierContext";
import { useRouter } from "expo-router";
import { useForm } from "../useForm";
import { SupplierFormProps } from "./types";
import { Image } from "react-native";

export const useSupplierForm = ({ defaultValue }: SupplierFormProps) => {
  const router = useRouter();
  const { setValue, handleSubmit, getValue, register } = useForm<Supplier>({
    defaultValues: defaultValue ?? {
      image: "",
      name: "",
      category: "",
      phone: "",
      cep: "",
      address: "",
      number: "",
      complement: "",
      city: "",
      state: "",
    },
  });
  const { add } = useSupplierContext();
  const { uri } = Image.resolveAssetSource(
    require("../../assets/images/no-image.png")
  );

  const onSubmit = (supplier: Supplier) => {
    add(supplier);
    router.back();
    return;
  };

  const handlePickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (result.canceled) return;

      setValue("image", result.assets?.[0].uri ?? "");
    } catch {}
  };

  const handleOnCancel = () => {
    router.back();
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    handleSubmit,
    onPickImage: handlePickImage,
    onCancel: handleOnCancel,
    imageUri: getValue("image") ?? defaultValue?.image ?? uri,
  };
};
