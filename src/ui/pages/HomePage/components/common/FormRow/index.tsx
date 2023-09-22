import { HTMLInputTypeAttribute } from "react";
import { Label } from "../Label";
import { HtmlInputValueType, RoundedInput } from "../RoundedInput";
import styles from "./style.module.css";

interface FormRowProps {
  id: string;
  // label
  label: string;
  supportText?: string;
  // input
  value: HtmlInputValueType;
  type: HTMLInputTypeAttribute | undefined;
  onValueChanged: (value: string) => void;
  formatter?: (value: HtmlInputValueType) => string;
}

export default function FormRow(props: FormRowProps) {
  return (
    <div className={styles.formRow}>
      <Label supportText={props.supportText} htmlFor={props.id}>
        {props.label}
      </Label>

      <RoundedInput
        id={props.id}
        value={props.value}
        onValueChanged={props.onValueChanged}
        type={props.type}
        formatter={props.formatter}
      ></RoundedInput>
    </div>
  );
}
