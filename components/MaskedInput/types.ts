import { ReactNode } from "react";
import { KeyboardTypeOptions } from "react-native";

export interface MaskedInputProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string | null;
  onChange?: (value: string) => void;
  prefix?: ReactNode | null;
  value?: unknown;
  mask: string;
  keyboardType?: KeyboardTypeOptions;
  type?: string;
}
