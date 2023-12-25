import { bottomInContainer } from "@/app/lib/anim";
import { getProduct } from "@/app/lib/data";
import { MotionDiv } from "@/app/ui/MotionDiv";
import ProductDetails from "@/app/ui/product/ProductDetails";
import ProductImages from "@/app/ui/product/ProductImages";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  return (
    <div className="container pt-6">
      <MotionDiv
        className="flex gap-8"
        variants={bottomInContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ProductImages images={product.images} className="hidden sm:block" />
        <ProductDetails product={product} />
      </MotionDiv>
    </div>
  );
}
