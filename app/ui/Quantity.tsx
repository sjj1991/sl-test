interface QuantityProps {
  count: number;
  min?: number;
  max?: number;
  onClickMinus: () => void;
  onClickPlus: () => void;
}

export default function Quantity({
  count,
  min = 1,
  max = 99,
  onClickMinus,
  onClickPlus,
}: QuantityProps) {
  return (
    <div className="flex bg-white w-[100px] text-center *:border *:border-gray-200 *:flex-1">
      <button
        className="disabled:opacity-50"
        onClick={onClickMinus}
        disabled={count === min}
      >
        -
      </button>
      <div>{count}</div>
      <button
        className="disabled:opacity-50"
        onClick={onClickPlus}
        disabled={count === max}
      >
        +
      </button>
    </div>
  );
}
