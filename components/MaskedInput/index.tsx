import { StyleSheet, Text, View } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import { MaskedInputProps } from "./types";

export const MaskedInput = ({
  label,
  placeholder,
  required,
  value,
  error,
  prefix,
  mask,
  keyboardType,
  type,
  onChange,
}: MaskedInputProps) => {
  return (
    <View style={styles.label}>
      {label ? <Text style={styles.textLabel}>{label}</Text> : null}
      <View style={styles.inputField}>
        {prefix ? prefix : null}
        <MaskedTextInput
          type={type}
          keyboardType={keyboardType}
          placeholder={placeholder}
          onChangeText={(text) => onChange?.(text)}
          style={styles.input}
          defaultValue={String(value ?? "")}
          mask={mask}
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
