interface QuantityProps {
  count: number;
  onClickMinus: () => void;
  onClickPlus: () => void;
}

export default function Quantity({
  count,
  onClickMinus,
  onClickPlus,
}: QuantityProps) {
  return (
    <div className="flex bg-white w-[100px] text-center *:border *:border-gray-200 *:flex-1">
      <button
        className="disabled:opacity-50"
        onClick={onClickMinus}
        disabled={count <= 1}
      >
        -
      </button>
      <div>{count}</div>
      <button
        className="disabled:opacity-50"
        onClick={onClickPlus}
        disabled={count >= 99}
      >
        +
      </button>
    </div>
  );
}
