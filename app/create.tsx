import { SupplierForm } from "@/components/SupplierForm";
import { useSupplierForm } from "@/hooks/useSupplierForm/useSupplierForm";
import { Stack, useRouter } from "expo-router";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default function Create() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Adicionar Fornecedor",
          presentation: "modal",
        }}
      />
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={140}>
        <ScrollView>
          <SupplierForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
