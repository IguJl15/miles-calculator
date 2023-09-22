import InjectedStateProps from "../../../InjectedStateProps";
import FormRow from "../../common/FormRow";
import { HtmlInputValueType } from "../../common/RoundedInput";

export default function BonusForm(props: InjectedStateProps) {
  function onPriceChanged(value: string) {
    const num = value.replace(RegExp(/[^0-9]/gm), "");
    props.state.bonus = Number(num);

    props.onStateChanged(props.state);
  }

  return (
    <FormRow
      id="value"
      label="Bônus"
      value={props.state.bonus}
      type="text"
      supportText="Bônus de milhas"
      onValueChanged={(e: string) => {
        onPriceChanged(e);
      }}
      formatter={(value: HtmlInputValueType) => {
        return `${value ?? ""} %`;
      }}
    ></FormRow>
  );
}
