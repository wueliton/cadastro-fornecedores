import { useFilterModalContext } from "@/context/useFilterModalContext";
import {
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
} from "react-native-reanimated";
import { Input } from "../Input";
import { Button } from "../Button";
import { useFilterForm } from "@/hooks/useFilterForm/useFilterForm";

export const Filter = () => {
  const { isOpened, close } = useFilterModalContext();
  const { register, onSubmit, onClear } = useFilterForm();

  return (
    <>
      <Modal visible={isOpened} animationType="fade" transparent>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={0}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.backdropContainer} onPress={close}>
              <Animated.View
                style={styles.backdrop}
                entering={FadeIn}
                exiting={FadeOut}
              />
            </TouchableOpacity>
            <Animated.View entering={SlideInDown} style={styles.container}>
              <ScrollView>
                <Text style={styles.title}>Filtrar</Text>
                <Input label="Categoria" {...register("category")} />
                <Input label="Cidade" {...register("city")} />
                <Input label="Estado" placeholder="UF" {...register("state")} />
                <View style={styles.actions}>
                  <Button style={styles.actionButton} onPress={onClear}>
                    Limpar
                  </Button>
                  <Button
                    style={styles.actionButton}
                    variant="primary"
                    onPress={onSubmit}
                  >
                    Buscar
                  </Button>
                </View>
              </ScrollView>
            </Animated.View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    padding: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    maxHeight: "90%",
  },
  backdrop: {
    backgroundColor: "rgba(0,0,0,0.2)",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
  backdropContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
  title: {
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "600",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  actionButton: {
    flex: 1,
  },
});
