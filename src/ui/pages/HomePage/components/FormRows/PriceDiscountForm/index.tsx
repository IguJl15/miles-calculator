import InjectedStateProps from "../../../InjectedStateProps";
import FormRow from "../../common/FormRow";
import { HtmlInputValueType } from "../../common/RoundedInput";

export default function PriceDismountForm(props: InjectedStateProps) {
  function onDiscountChanged(value: string) {
    const num = value.replace(RegExp(/[^0-9]/gm), "");
    props.state.discount = Number(num);

    props.onStateChanged(props.state);
  }

  return (
    <FormRow
      id="value"
      label="Desconto"
      onValueChanged={(e: string) => {
        onDiscountChanged(e);
      }}
      value={props.state.discount}
      type="text"
      supportText="Desconto no preço por milheiro"
      formatter={(value: HtmlInputValueType) => {
        return `${value ?? ""} %`;
      }}
    ></FormRow>
  );
}
