import { StyleSheet, View } from "react-native";
import { BottomActionsProps } from "./types";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export const BottomActions = ({ children }: BottomActionsProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(248, 251, 252, 0)", "#f8fbfc"]}
        style={styles.background}
        locations={[0, 0.2]}
      />
      <View style={styles.actions}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    paddingTop: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  background: {
    height: 90,
    position: "absolute",
    width: "100%",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  actions: {
    padding: 10,
  },
});
