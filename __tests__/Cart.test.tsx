import { act, render, screen, waitFor } from "@testing-library/react";
import { Product } from "@/app/lib/definitions";
import AddToCart from "@/app/ui/product/AddToCart";
import Cart from "@/app/ui/Cart";

const product1: Product = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};
const product2: Product = {
  id: 2,
  title: "iPhone X",
  description:
    "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  price: 899,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/2/1.jpg",
    "https://i.dummyjson.com/data/products/2/2.jpg",
    "https://i.dummyjson.com/data/products/2/3.jpg",
    "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  ],
};

const renderCart = () => render(<Cart />);
const renderAddToCart = () => render(<AddToCart product={product1} />);

describe("Cart", () => {
  it("should render with empty message when empty", () => {
    renderCart();
    expect(screen.getByText("No items in cart.")).toBeDefined();
  });

  it("should show cart items with correct quantity", async () => {
    const { rerender } = renderAddToCart();
    const plusButton = screen.getByText("+");
    const addToCartbutton = screen.getByText("Add to cart");
    act(() => plusButton.click());
    act(() => addToCartbutton.click()); // Add iPhone 9 x 2
    await waitFor(() => expect(screen.getByText("Add to cart")).toBeDefined(), {
      timeout: 2000,
    });
    rerender(<AddToCart product={product2} />);
    act(() => plusButton.click());
    act(() => addToCartbutton.click()); // Add iPhone X x 2
    renderCart();
    expect(screen.getByText("iPhone 9")).toBeDefined();
    expect(screen.getByText("iPhone X")).toBeDefined();
    expect(await screen.findAllByText("2")).toHaveLength(2);
  });

  it("should increase quantity correctly", async () => {
    const { unmount } = renderAddToCart();
    const plusButton = screen.getByText("+");
    const addToCartbutton = screen.getByText("Add to cart");
    act(() => plusButton.click());
    act(() => addToCartbutton.click()); // Add iPhone 9 x 2
    unmount();
    renderCart();
    const cartPlusButton = screen.getByText("+");
    expect(screen.getByText("iPhone 9")).toBeDefined();
    expect(screen.getByText("2")).toBeDefined();
    act(() => cartPlusButton.click());
    expect(screen.getByText("3")).toBeDefined();
  });

  it("should decrease quantity correctly", async () => {
    const { unmount } = renderAddToCart();
    const plusButton = screen.getByText("+");
    const addToCartbutton = screen.getByText("Add to cart");
    act(() => plusButton.click());
    act(() => addToCartbutton.click()); // Add iPhone 9 x 2
    unmount();
    renderCart();
    const cartMinusButton = screen.getByText("-");
    expect(screen.getByText("iPhone 9")).toBeDefined();
    expect(screen.getByText("2")).toBeDefined();
    act(() => cartMinusButton.click());
    expect(screen.getByText("1")).toBeDefined();
  });

  it("should remove item correctly", async () => {
    const { unmount } = renderAddToCart();
    const addToCartbutton = screen.getByText("Add to cart");
    act(() => addToCartbutton.click()); // Add iPhone 9
    unmount();
    renderCart();
    expect(screen.getByText("iPhone 9")).toBeDefined();
    expect(screen.getByText("1")).toBeDefined();
    const removeButton = screen.getByText("Remove");
    act(() => removeButton.click());
    expect(screen.getByText("No items in cart.")).toBeDefined();
  });

  it("should calculate line total correctly", async () => {
    const { unmount } = renderAddToCart();
    const plusButton = screen.getByText("+");
    const addToCartbutton = screen.getByText("Add to cart");
    act(() => plusButton.click());
    act(() => addToCartbutton.click()); // Add iPhone 9 x 2
    unmount();
    renderCart();
    expect(screen.getAllByText("S$1,098")).toBeDefined();
  });

  it("should calculate grand total correctly", async () => {
    const { rerender } = renderAddToCart();
    const plusButton = screen.getByText("+");
    const addToCartbutton = screen.getByText("Add to cart");
    act(() => plusButton.click());
    act(() => addToCartbutton.click()); // Add iPhone 9 x 2
    await waitFor(() => expect(screen.getByText("Add to cart")).toBeDefined(), {
      timeout: 2000,
    });
    rerender(<AddToCart product={product2} />);
    act(() => plusButton.click());
    act(() => addToCartbutton.click()); // Add iPhone X x 2
    renderCart();
    expect(screen.getByText("S$2,896")).toBeDefined();
  });
});
