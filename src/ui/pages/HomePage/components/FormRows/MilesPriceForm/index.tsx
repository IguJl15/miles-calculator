import { formatMoney } from "../../../../../../utils/formatters";
import InjectedStateProps from "../../../InjectedStateProps";
import FormRow from "../../common/FormRow";
import { HtmlInputValueType } from "../../common/RoundedInput";

export default function MilesPriceForm(props: InjectedStateProps) {
  function onPriceChanged(value: string) {
    const num = value.replace(RegExp(/[^0-9]/gm), "");
    props.state.bonus = Number(num);

    props.onStateChanged(props.state);
  }

  return (
    <FormRow
      id="value"
      label="Preço por milheiro"
      onValueChanged={(e: string) => {
        onPriceChanged(e);
      }}
      value={props.state.price}
      type="text"
      supportText="O preço"
      formatter={(value: HtmlInputValueType) => {
        return formatMoney(Number(value));
      }}
    ></FormRow>
  );
}
