import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import React from "react";
import { ButtonProps } from "./types";

export const Button = ({
  children,
  variant = "basic",
  style,
  prefix,
  color,
  onPress,
  onLongPress,
}: ButtonProps) => {
  const [isHoveredState, setIsHoveredState] = useState(false);
  return (
    <View style={style}>
      <Pressable
        style={[
          styles.button,
          styles[variant],
          isHoveredState && styles[`${variant}Hovered`],
        ]}
        onPressIn={() => setIsHoveredState(true)}
        onPressOut={() => setIsHoveredState(false)}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <View style={styles.buttonContent}>
          {prefix ? prefix : null}
          <Text
            style={[
              styles.text,
              styles[`${variant}Text`],
              color ? { color } : {},
            ]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderStyle: "solid",
    shadowColor: "#EEEEEE",
    shadowOffset: { width: 0, height: 2 },
  },
  buttonContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  text: {
    fontWeight: "bold",
  },
  basicHovered: {
    backgroundColor: "#F2F2F2",
  },
  basic: {
    backgroundColor: "#FFFFFF",
  },
  basicText: {
    color: "#333333",
  },
  primary: {
    backgroundColor: "#3084fe",
    color: "#FFFFFF",
  },
  primaryText: {
    color: "#FFFFFF",
  },
  primaryHovered: {
    backgroundColor: "#6e71f3",
  },
  ghost: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  ghostHovered: {
    backgroundColor: "transparent",
  },
  ghostText: {
    color: "#333333",
  },
});
