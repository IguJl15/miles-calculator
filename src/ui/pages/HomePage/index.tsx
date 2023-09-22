import { useState } from "react";
import MilesInput from "./components/MilesInput";
import styles from "./style.module.css";
import MilesCostCalculatorState from "./MilesCostCalculatorState";
import BonusForm from "./components/FormRows/BonusForm";
import InjectedStateProps from "./InjectedStateProps";
import PricePerMileCard from "./components/Cards/MilesPriceCard";
import { OtherInfoCard } from "./components/Cards/OtherInfoCard";
import MilesPriceForm from "./components/FormRows/MilesPriceForm";
import PriceDismountForm from "./components/FormRows/PriceDiscountForm";

export function BuyMilesPage() {
  const [state, setState] = useState(
    new MilesCostCalculatorState(1_000, 70, 40, 200)
  );

  function update(state: MilesCostCalculatorState) {
    setState(state.copy());
  }

  // Miles operations
  function onPriceChanged(value: number) {
    state.price = value;

    update(state);
  }

  const injectableProps: InjectedStateProps = {
    state: state,
    onStateChanged: (state: MilesCostCalculatorState) => {
      update(state);
    },
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.main_form}>
          <h2>Vale a pena comprar milhas agora?</h2>
          <MilesPriceForm {...injectableProps} />
          <MilesInput {...injectableProps} />
          <BonusForm {...injectableProps} />
          <PriceDismountForm {...injectableProps} />
        </div>

        <footer className={styles.footer}>
          <PricePerMileCard {...injectableProps} />
          <OtherInfoCard {...injectableProps} />
        </footer>
      </main>
    </>
  );
}
