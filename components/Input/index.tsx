import { TextInput, StyleSheet, Text, View } from "react-native";
import { InputProps } from "./types";

export const Input = ({
  label,
  placeholder,
  required,
  value,
  error,
  prefix,
  onChange,
}: InputProps) => {
  return (
    <View style={styles.label}>
      {label ? <Text style={styles.textLabel}>{label}</Text> : null}
      <View style={styles.inputField}>
        {prefix ? prefix : null}
        <TextInput
          placeholder={placeholder}
          onChangeText={onChange}
          style={styles.input}
          value={String(value ?? "")}
        />
      </View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    display: "flex",
    gap: 4,
    flexDirection: "column",
  },
  textLabel: {
    paddingLeft: 4,
    paddingRight: 4,
    fontSize: 16,
    fontWeight: "500",
  },
  inputField: {
    padding: 12,
    fontSize: 14,
    backgroundColor: "#eff3f4",
    borderRadius: 4,
    display: "flex",
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
  error: {
    minHeight: 17,
    color: "#ff5555",
    textAlign: "right",
  },
});
