import { getProducts } from "@/app/lib/data";
import ProductItem from "@/app/ui/product/ProductItem";
import { MotionDiv } from "@/app/ui/MotionDiv";
import { bottomInContainer } from "@/app/lib/anim";

export default async function ProductsListing({
  category,
}: {
  category?: string;
}) {
  const { products } = await getProducts(category);

  if (products.length === 0)
    return (
      <div className="grid place-content-center">
        <div>No products found.</div>
      </div>
    );

  return (
    <>
      <MotionDiv
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6"
        variants={bottomInContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </MotionDiv>
    </>
  );
}
