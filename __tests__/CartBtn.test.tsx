import { act, render, screen } from "@testing-library/react";
import CartBtn from "@/app/ui/CartBtn";
import { Product } from "@/app/lib/definitions";
import AddToCart from "@/app/ui/product/AddToCart";

const product: Product = {
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

const renderCartBtn = () => render(<CartBtn />);
const renderAddToCart = () => render(<AddToCart product={product} />);

describe("CartBtn", () => {
  it("should render without count if cart is empty", () => {
    renderCartBtn();
    expect(screen.getByText("CART")).toBeDefined();
    expect(screen.queryByText("(")).toBeNull();
  });

  it("should show cart count when item is added", () => {
    renderAddToCart();
    const plusButton = screen.getByText("+");
    const addToCartbutton = screen.getByText("Add to cart");
    act(() => plusButton.click());
    act(() => addToCartbutton.click());
    renderCartBtn();
    expect(screen.getByText("CART (2)")).toBeDefined();
  });
});
