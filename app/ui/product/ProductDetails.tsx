import { Product } from "@/app/lib/definitions";
import { formatCurrency } from "@/app/lib/utils";
import AddToCart from "@/app/ui/product/AddToCart";
import ProductImages from "@/app/ui/product/ProductImages";
import { MotionDiv } from "@/app/ui/MotionDiv";
import { bottomIn } from "@/app/lib/anim";

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <MotionDiv
      variants={bottomIn()}
      className="w-full sm:w-7/12 md:w-8/12 grid gap-3 content-start"
    >
      <h1 className="text-3xl font-semibold capitalize">{product.title}</h1>
      <h2 className="text-red-700 text-xl font-semibold">
        {formatCurrency(product.price)}
      </h2>
      <ProductImages images={product.images} className="block sm:hidden" />
      <p>
        <strong>Description</strong>
        <br />
        {product.description}
      </p>
      <AddToCart product={product} />
    </MotionDiv>
  );
}
