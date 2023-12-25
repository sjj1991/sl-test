import { render, screen, waitFor } from "@testing-library/react";
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

const renderAddToCart = () => render(<AddToCart product={product} />);

describe("AddToCart", () => {
  it("should render the add to cart button", () => {
    renderAddToCart();
    const button = screen.getByText("Add to cart");
    expect(button).toBeDefined();
  });

  it("should set added state to true when the add to cart button is clicked", async () => {
    renderAddToCart();
    const button = screen.getByText("Add to cart");
    button.click();
    await waitFor(() =>
      expect(screen.getByText("Added to cart")).toBeDefined()
    );
  });

  it("should set the added state to false after 1500ms", async () => {
    renderAddToCart();
    const button = screen.getByText("Add to cart");
    button.click();
    await waitFor(() =>
      expect(screen.getByText("Added to cart")).toBeDefined()
    );
    setTimeout(() => {
      expect(screen.queryByText("Added to cart")).toBeNull();
    }, 1500);
  });
});
