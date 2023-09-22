import MilesCostCalculatorState from "./MilesCostCalculatorState";

export default interface InjectedStateProps {
  state: MilesCostCalculatorState;
  onStateChanged: (state: MilesCostCalculatorState) => void;
}
