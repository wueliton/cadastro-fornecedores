import { BottomActions } from "@/components/BottomActions";
import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { Header } from "@/components/Header";
import { SupplierList } from "@/components/SupplierList";
import { Entypo } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          title: "Home",
          contentStyle: {
            backgroundColor: "#f8fbfc",
          },
          headerShown: false,
        }}
      />
      <SafeAreaView>
        <Header></Header>
      </SafeAreaView>
      <View style={styles.content}>
        <SupplierList />
      </View>
      <BottomActions>
        <Button onPress={() => router.push("/create")} variant="primary">
          <Entypo name="plus" style={styles.icon} />
          Criar novo{" "}
        </Button>
      </BottomActions>
      <Filter />
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  icon: {
    fontSize: 16,
  },
});
