import { FlatList, StyleSheet, View, Text, Pressable } from "react-native";
import { SupplierItem } from "./SupplierItem";
import { useSupplierContext } from "@/context/useSupplierContext";
import { Entypo, Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useFilterModalContext } from "@/context/useFilterModalContext";
import { Input } from "../Input";

export const SupplierList = () => {
  const { suppliers, hasSupplier, searchInputProps, hasFilter } =
    useSupplierContext();
  const { open } = useFilterModalContext();

  return (
    <View style={styles.list}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Fornecedores ({suppliers.length})</Text>
          <Pressable
            onPress={open}
            style={[
              styles.filterButton,
              hasFilter && styles.filterButtonActive,
            ]}
          >
            <Entypo name="sound-mix" />
          </Pressable>
        </View>
        <Input
          placeholder="Pesquisar por Nome"
          prefix={<Entypo name="magnifying-glass" />}
          {...searchInputProps}
        />
      </View>
      {hasSupplier ? (
        <FlatList
          data={suppliers}
          renderItem={({ item }) => (
            <SupplierItem
              name={item.name}
              image={item.image}
              category={item.category}
              city={item.city}
              id={item.id}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.itemList}
        />
      ) : (
        <View style={styles.emptyListContainer}>
          <View style={styles.emptyListIconContainer}>
            <Octicons name="archive" style={styles.emptyListIcon} />
          </View>
          <Text style={styles.emptyListTitle}>Nenhum item cadastrado</Text>
          <Text style={styles.emptyListSubtitle}>
            Comece adicionando um novo fornecedor
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  itemList: {
    paddingBottom: 80,
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  emptyListContainer: {
    padding: 20,
    minHeight: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  emptyListIconContainer: {
    backgroundColor: "#e8f0fc",
    padding: 12,
    borderRadius: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyListIcon: {
    color: "#7fb2ff",
    fontSize: 40,
  },
  emptyListTitle: {
    color: "#8d8d8d",
    fontSize: 16,
    fontWeight: "bold",
  },
  emptyListSubtitle: {
    color: "#acacac",
    maxWidth: 200,
    textAlign: "center",
    fontSize: 12,
  },
  filterButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  filterButtonActive: {
    backgroundColor: "#cadffe",
  },
});
