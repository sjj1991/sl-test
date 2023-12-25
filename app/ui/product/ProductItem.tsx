import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/lib/definitions";
import { formatCurrency } from "@/app/lib/utils";
import { MotionDiv } from "@/app/ui/MotionDiv";
import { bottomIn } from "@/app/lib/anim";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <MotionDiv variants={bottomIn()}>
      <Link
        className="grid gap-1 text-sm items-start group"
        href={`/product/${product.id}`}
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          className="aspect-square object-cover mb-2"
        />

        <div className="uppercase font-semibold group-hover:text-red-700">
          {product.title}
        </div>

        <div className="text-gray-500 capitalize">
          {product.brand}
          <br />
          {product.category}
        </div>

        <div className="text-red-700">From {formatCurrency(product.price)}</div>
      </Link>
    </MotionDiv>
  );
}
