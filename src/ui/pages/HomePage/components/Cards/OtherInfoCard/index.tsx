import { formatMoney } from "../../../../../../utils/formatters";
import MilesCostCalculatorState from "../../../MilesCostCalculatorState";
import styles from "./style.module.css";

interface OtherInfoCardProps {
  state: MilesCostCalculatorState;
}

export function OtherInfoCard(props: OtherInfoCardProps) {
  return (
    <div className={styles.other_info_card}>
      <span className={styles.title}>Outras informações</span>
      <div className={styles.info}>
        <span className={styles.label}>Valor total a pagar</span>
        <span className={styles.data}>
          {formatMoney(props.state.totalPriceForThousandMiles)}
        </span>
      </div>
      <div className={styles.info}>
        <span className={styles.label}>Milhas bônus</span>
        <span className={styles.data}>{props.state.bonusMiles}</span>
      </div>

      <div className={styles.info}>
        <span className={styles.label}>Desconto total</span>
        <span className={styles.data}>{props.state.totalDiscount}</span>
      </div>
    </div>
  );
}
