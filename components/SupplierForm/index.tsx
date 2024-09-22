import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Entypo } from "@expo/vector-icons";
import { View, Image, Pressable, StyleSheet } from "react-native";
import { useSupplierForm } from "@/hooks/useSupplierForm/useSupplierForm";
import { SupplierFormProps } from "./types";
import { MaskedInput } from "../MaskedInput";

export const SupplierForm = ({
  value,
  onRemove: onCustomRemove,
  onCancel: onCustomCancel,
  onSubmit: onCustomSubimt,
}: SupplierFormProps) => {
  const { register, onSubmit, handleSubmit, onPickImage, imageUri, onCancel } =
    useSupplierForm({
      defaultValue: value,
    });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageUpload}>
          <Pressable onPress={onPickImage}>
            <Image source={{ uri: imageUri }} style={styles.image} />
          </Pressable>
          <View style={styles.cameraIcon}>
            <Entypo name="camera" style={{ fontSize: 18 }} />
          </View>
        </View>

        <Input
          label="Nome do Fornecedor"
          placeholder="Digite o nome do Fornecedor"
          {...register("name", true)}
        />
        <Input
          label="Categoria"
          placeholder="Digite a categoria do Produtos fornecidos"
          {...register("category", true)}
        />
        <MaskedInput
          label="Telefone"
          placeholder="(00) 00000-0000"
          mask="(99) 99999-9999"
          keyboardType="phone-pad"
          {...register("phone", true)}
        />
        <MaskedInput
          label="CEP"
          mask="99999-999"
          placeholder="00000-000"
          keyboardType="number-pad"
          {...register("cep", true)}
        />
        <Input label="Endereço" {...register("address", true)} />
        <Input label="Número" {...register("number", true)} />
        <Input label="Complemento" {...register("complement")} />
        <Input label="Cidade" {...register("city", true)} />
        <MaskedInput
          label="Estado"
          mask="AA"
          placeholder="UF"
          {...register("state", true)}
        />
      </View>
      {onCustomRemove ? (
        <View style={styles.actionRemove}>
          <Button
            style={styles.actionButton}
            variant="ghost"
            color="#ff3e3e"
            onPress={onCustomRemove}
          >
            Excluir
          </Button>
        </View>
      ) : null}
      <View style={styles.actions}>
        <Button
          style={styles.actionButton}
          onPress={onCustomCancel ?? onCancel}
        >
          Cancelar
        </Button>
        <Button
          style={styles.actionButton}
          variant="primary"
          onPress={onCustomSubimt ? handleSubmit(onCustomSubimt) : onSubmit}
        >
          Salvar
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    minHeight: "auto",
    gap: 4,
    overflow: "scroll",
  },
  image: {
    height: 100,
    width: 100,
    margin: "auto",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },
  imageUpload: {
    margin: "auto",
    marginBottom: 20,
  },
  cameraIcon: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    bottom: -8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: -8,
    borderWidth: 8,
    borderColor: "#FFFFFF",
  },
  actions: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    padding: 20,
    paddingBottom: 40,
    minHeight: "auto",
  },
  actionRemove: {
    flex: 1,
    display: "flex",
    padding: 20,
    paddingBottom: 0,
    paddingTop: 0,
  },
  actionButton: {
    flex: 1,
  },
});
