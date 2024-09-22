import { SupplierForm } from "@/components/SupplierForm";
import { useEditSupplier } from "@/hooks/useEditSupplier";
import { Entypo } from "@expo/vector-icons";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import {
  ScrollView,
  Image,
  View,
  StyleSheet,
  Text,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default function Supplier() {
  const { id } = useLocalSearchParams();
  const { isEditing, onEdit, onCancel, onRemove, onSubmit, onCall, supplier } =
    useEditSupplier({
      id,
    });
  const { name, image, category, phone, cep, address, number, city, state } =
    supplier;

  return (
    <>
      <Stack.Screen
        options={{
          title: "",
          contentStyle: {
            backgroundColor: "#f8fbfc",
          },
          headerStyle: {
            backgroundColor: "#f8fbfc",
          },
          headerShadowVisible: false,
          headerTitle: () => null,
          headerRight: () =>
            isEditing ? null : (
              <Pressable onPress={onEdit}>
                <Text>Editar</Text>
              </Pressable>
            ),
          headerLeft: () => (
            <Link href="/">
              <Entypo name="chevron-left" style={styles.backButton} />
            </Link>
          ),
        }}
      />
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={80}>
        <ScrollView style={styles.scrollView}>
          {isEditing ? (
            <Animated.View
              entering={FadeIn.duration(500)}
              exiting={FadeOut.duration(200)}
            >
              <SupplierForm
                onSubmit={onSubmit}
                onCancel={onCancel}
                onRemove={onRemove}
                value={supplier}
              />
            </Animated.View>
          ) : (
            <Animated.View
              entering={FadeIn.duration(500)}
              exiting={FadeOut.duration(200)}
            >
              <View style={styles.container}>
                <View style={styles.imageUpload}>
                  <Image
                    source={{
                      uri: image,
                    }}
                    style={styles.image}
                  />
                </View>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.contentCategory}>
                  <Text style={styles.categoryTitle}>Categoria</Text>
                  <Text>{category}</Text>
                </View>
                <Pressable onPress={onCall} style={styles.contentCategory}>
                  <Text style={styles.categoryTitle}>Telefone</Text>
                  <Text style={styles.callNumber}>{phone}</Text>
                </Pressable>
                <View style={styles.contentCategory}>
                  <Text style={styles.categoryTitle}>Endereço</Text>
                  <Text>
                    {address}, {number} {"\n"}
                    {city} - {state} {"\n"}
                    CEP: {cep}
                  </Text>
                </View>
              </View>
            </Animated.View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    gap: 12,
    flex: 1,
  },
  scrollView: {
    height: "100%",
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
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  contentCategory: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    display: "flex",
    gap: 4,
    borderRadius: 8,
  },
  categoryTitle: {
    fontSize: 12,
  },
  backButton: {
    fontSize: 20,
  },
  editButton: {
    fontSize: 14,
  },
  callNumber: {
    color: "#5a94ff",
  },
});
