import { formatMoney } from "../../../../../../utils/formatters";
import MilesCostCalculatorState from "../../../MilesCostCalculatorState";
import styles from "./style.module.css";

interface PricePerMileCardProps {
  state: MilesCostCalculatorState;
}

export default function PricePerMileCard(props: PricePerMileCardProps) {
  return (
    <div className={styles.price_card}>
      <div className={styles.head}>
        <span className={styles.title}>Valor por milheiro</span>
        <span className={styles.price}>
          {formatMoney(props.state.pricePerThousandMileswithBonusAndDiscount)}
        </span>
      </div>
      {/* <div>bar</div> */}
    </div>
  );
}
