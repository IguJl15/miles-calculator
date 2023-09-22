import { HTMLInputTypeAttribute, PropsWithChildren } from "react";
import styles from "./style.module.css";

/** from: [InputHTMLAttributes.value] */
export type HtmlInputValueType =
  | string
  | ReadonlyArray<string>
  | number
  | undefined;

interface RoundedInputProps extends PropsWithChildren {
  id: string;
  value: HtmlInputValueType;
  onValueChanged: (value: string) => void;
  type: HTMLInputTypeAttribute | undefined;
  formatter?: (value: HtmlInputValueType) => string;
}

export function RoundedInput(props: RoundedInputProps) {
  return (
    <>
      <input
        id={props.id}
        className={styles.input}
        value={
          props.formatter != null ? props.formatter(props.value) : props.value
        }
        type={props.type}
        onChange={(e) => {
          props.onValueChanged(e.target.value.toString());
        }}
      />
    </>
  );
}
