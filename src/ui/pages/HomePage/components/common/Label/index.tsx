import { PropsWithChildren } from "react";
import styles from "./style.module.css";

interface LabelProps extends PropsWithChildren {
  htmlFor: string;
  supportText?: string;
}

export function Label(props: LabelProps) {
  return (
    <>
      <div className={styles.labelDiv}>
        <label className={styles.label} htmlFor={props.htmlFor}>
          {props.children}
        </label>
        {props.supportText && <span>{props.supportText}</span>}
      </div>
    </>
  );
}
