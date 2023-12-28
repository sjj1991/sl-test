import { act, render, screen } from "@testing-library/react";
import Quantity from "@/app/ui/Quantity";

describe("Quantity", () => {
  it("should render with provided count", () => {
    render(
      <Quantity count={5} onClickMinus={() => null} onClickPlus={() => null} />
    );
    expect(screen.getByText("5")).toBeDefined();
  });

  it("should not decrease lower than min", () => {
    let count = 2;
    const { rerender } = render(
      <Quantity
        count={count}
        onClickMinus={() => count--}
        onClickPlus={() => count++}
        min={1}
      />
    );
    const minusButton = screen.getByText("-");
    act(() => minusButton.click());
    rerender(
      <Quantity
        count={count}
        onClickMinus={() => count--}
        onClickPlus={() => count++}
        min={1}
      />
    );
    act(() => minusButton.click());
    rerender(
      <Quantity
        count={count}
        onClickMinus={() => count--}
        onClickPlus={() => count++}
        min={1}
      />
    );
    expect(screen.getByText("1")).toBeDefined();
  });

  it("should not increase higher than max", () => {
    let count = 2;
    const { rerender } = render(
      <Quantity
        count={count}
        onClickMinus={() => count--}
        onClickPlus={() => count++}
        max={3}
      />
    );
    const plusButton = screen.getByText("+");
    act(() => plusButton.click());
    rerender(
      <Quantity
        count={count}
        onClickMinus={() => count--}
        onClickPlus={() => count++}
        max={3}
      />
    );
    act(() => plusButton.click());
    rerender(
      <Quantity
        count={count}
        onClickMinus={() => count--}
        onClickPlus={() => count++}
        max={3}
      />
    );
    expect(screen.getByText("3")).toBeDefined();
  });
});
