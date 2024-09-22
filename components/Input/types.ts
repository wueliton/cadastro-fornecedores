import { ReactNode } from "react";

export interface InputProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string | null;
  onChange?: (value: string) => void;
  prefix?: ReactNode | null;
  value?: unknown;
}
