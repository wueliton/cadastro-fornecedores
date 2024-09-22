import { PropsWithChildren, ReactNode } from "react";
import {
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";

export interface ButtonProps extends PropsWithChildren {
  variant?: "basic" | "primary" | "ghost";
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  prefix?: ReactNode;
  color?: ColorValue;
}
