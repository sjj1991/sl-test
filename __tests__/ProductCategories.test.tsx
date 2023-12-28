import { render, screen } from "@testing-library/react";
import ProductCategories from "@/app/ui/product/ProductCategories";
import "intersection-observer";

vi.mock("next/navigation", () => ({
  useRouter() {
    return {
      replace: () => null,
    };
  },
  usePathname() {},
  useSearchParams() {
    return {
      get: () => null,
    };
  },
}));

describe("ProductCategories", () => {
  it("should render with provided categories", () => {
    render(<ProductCategories categories={["Category 1", "Category 2"]} />);
    expect(screen.getAllByText("Category 1")).toBeDefined();
    expect(screen.getAllByText("Category 2")).toBeDefined();
  });
});
