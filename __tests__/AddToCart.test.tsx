import { act, render, screen, waitFor } from "@testing-library/react";
import { Product } from "@/app/lib/definitions";
import AddToCart from "@/app/ui/product/AddToCart";
import CartBtn from "@/app/ui/CartBtn";
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

const renderAddToCart = () => render(<AddToCart product={product1} />);
const renderCartBtn = () => render(<CartBtn />);
const renderCart = () => render(<Cart />);

describe("AddToCart", () => {
  it("should render with initial state of 1 quantity", () => {
    renderAddToCart();
    expect(screen.getByText("Add to cart")).toBeDefined();
    expect(screen.getByText("1")).toBeDefined();
  });

  it("should show 'Added to cart' message when clicked and revert to original button text after 1500ms", async () => {
    renderAddToCart();
    const addToCartbutton = screen.getByText("Add to cart");
    act(() => addToCartbutton.click());
    await waitFor(() =>
      expect(screen.getByText("Added to cart")).toBeDefined()
    );
    setTimeout(() => {
      expect(screen.queryByText("Add to cart")).toBeDefined();
    }, 1500);
  });

  it("should add item and quantity to CartStore when clicked", async () => {
    renderAddToCart();
    const plusButton = screen.getByText("+");
    const addToCartbutton = screen.getByText("Add to cart");
    act(() => plusButton.click());
    act(() => addToCartbutton.click());
    renderCartBtn();
    renderCart();
    expect(screen.getByText("CART (2)")).toBeDefined();
    expect(screen.getByText("iPhone 9")).toBeDefined();
    expect(screen.getByText("2")).toBeDefined();
  });

  it("should combine the same items in cart", async () => {
    renderAddToCart();
    const plusButton = screen.getByText("+");
    const addToCartbutton = screen.getByText("Add to cart");
    act(() => addToCartbutton.click()); // Add 1 item
    await waitFor(() => expect(screen.getByText("Add to cart")).toBeDefined(), {
      timeout: 2000,
    });
    act(() => plusButton.click());
    act(() => addToCartbutton.click()); // Add 2 items
    renderCartBtn();
    renderCart();
    expect(screen.getByText("CART (3)")).toBeDefined();
    expect(screen.getByText("iPhone 9")).toBeDefined();
    expect(screen.getByText("3")).toBeDefined();
  });

  it("should separate the different items in cart", async () => {
    const { rerender } = renderAddToCart();
    const addToCartbutton = screen.getByText("Add to cart");
    act(() => addToCartbutton.click()); // Add iPhone 9
    await waitFor(() => expect(screen.getByText("Add to cart")).toBeDefined(), {
      timeout: 2000,
    });
    rerender(<AddToCart product={product2} />);
    act(() => addToCartbutton.click()); // Add iPhone X
    renderCartBtn();
    renderCart();
    expect(screen.getByText("CART (2)")).toBeDefined();
    expect(screen.getByText("iPhone 9")).toBeDefined();
    expect(screen.getByText("iPhone X")).toBeDefined();
  });
});
