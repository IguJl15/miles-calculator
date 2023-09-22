import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Label } from "../common/Label";
import styles from "./style.module.css";
import InjectedStateProps from "../../InjectedStateProps";

export default function MilesInput(props: InjectedStateProps) {
  function onValueChanged(value: number) {
    props.state.miles = value;

    props.onStateChanged(props.state);
  }

  function increaseMilesAt(value: number) {
    props.state.incrementMilesAt(value);

    props.onStateChanged(props.state);
  }

  function decreaseMilesAt(value: number) {
    props.state.decrementMilesAt(value);

    props.onStateChanged(props.state);
  }

  return (
    <div className={styles.miles_form_area}>
      <Label htmlFor="" supportText="Quantas milhas você deseja comprar?">
        Milhas
      </Label>
      <div className={styles.miles_input_row}>
        <button type="button" onClick={() => decreaseMilesAt(10_000)}>
          <FontAwesomeIcon icon={faMinus} />
          <span>10k</span>
        </button>
        <input
          type="number"
          value={props.state.miles}
          min={0}
          onChange={(e) => onValueChanged(Number(e.target.value))}
        />
        <button type="button" onClick={() => increaseMilesAt(10_000)}>
          <FontAwesomeIcon icon={faPlus} />
          <span>10k</span>
        </button>
      </div>
    </div>
  );
}
