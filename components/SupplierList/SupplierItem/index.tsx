import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SupplierItemProps } from "./types";

export const SupplierItem = ({
  image,
  name,
  category,
  city,
  id,
}: SupplierItemProps) => {
  const router = useRouter();
  const [isHoveredState, setIsHoveredState] = useState(false);

  return (
    <Pressable
      onPress={() => router.push(`/supplier/${id}`)}
      onPressIn={() => setIsHoveredState(true)}
      onPressOut={() => setIsHoveredState(false)}
    >
      <View
        style={[styles.container, isHoveredState && styles.containerHovered]}
      >
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {category} | {city}
          </Text>
        </View>
        <Entypo style={styles.icon} name="chevron-right" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 12,
  },
  containerHovered: {
    backgroundColor: "#f4f3f3",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
    color: "#999999",
  },
  icon: {
    marginLeft: "auto",
    color: "#BBBBBB",
    fontSize: 20,
  },
});
