import { render, screen } from "@testing-library/react";
import CartBtn from "@/app/ui/CartBtn";

describe("CartBtn", () => {
  it("should render the correct text", () => {
    render(<CartBtn />);
    const cartBtn = screen.getByText("CART");
    expect(cartBtn).toBeDefined();
  });

  // TODO: Add zustand mock
  // it("should render the correct count", () => {
  //   const cartItems = [
  //     {
  //       item: {
  //         id: 1,
  //         title: "iPhone 9",
  //         description: "An apple mobile which is nothing like apple",
  //         price: 549,
  //         brand: "Apple",
  //         category: "smartphones",
  //         thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //         images: [
  //           "https://i.dummyjson.com/data/products/1/1.jpg",
  //           "https://i.dummyjson.com/data/products/1/2.jpg",
  //           "https://i.dummyjson.com/data/products/1/3.jpg",
  //           "https://i.dummyjson.com/data/products/1/4.jpg",
  //           "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //         ],
  //       },
  //       quantity: 1,
  //     },
  //   ];
  //   const { rerender } = render(<CartBtn />);
  //   const cartBtn = screen.getByText("CART (1)");
  //   expect(cartBtn).toBeDefined();

  //   const newCartItems = [
  //     {
  //       item: {
  //         id: 1,
  //         title: "iPhone 9",
  //         description: "An apple mobile which is nothing like apple",
  //         price: 549,
  //         brand: "Apple",
  //         category: "smartphones",
  //         thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //         images: [
  //           "https://i.dummyjson.com/data/products/1/1.jpg",
  //           "https://i.dummyjson.com/data/products/1/2.jpg",
  //           "https://i.dummyjson.com/data/products/1/3.jpg",
  //           "https://i.dummyjson.com/data/products/1/4.jpg",
  //           "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //         ],
  //       },
  //       quantity: 2,
  //     },
  //     {
  //       item: {
  //         id: 2,
  //         title: "iPhone X",
  //         description:
  //           "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  //         price: 899,
  //         brand: "Apple",
  //         category: "smartphones",
  //         thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  //         images: [
  //           "https://i.dummyjson.com/data/products/2/1.jpg",
  //           "https://i.dummyjson.com/data/products/2/2.jpg",
  //           "https://i.dummyjson.com/data/products/2/3.jpg",
  //           "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  //         ],
  //       },
  //       quantity: 3,
  //     },
  //   ];
  //   rerender(<CartBtn />);
  //   const updatedCartBtn = screen.getByText("CART (5)");
  //   expect(updatedCartBtn).toBeDefined();
  // });
});
