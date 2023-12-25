import { Suspense } from "react";
import { getCategories } from "@/app/lib/data";
import ProductsListing from "@/app/ui/product/ProductsListing";
import ProductCategories from "@/app/ui/product/ProductCategories";
import { ProductsListingSkeleton } from "@/app/ui/Skeletons";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    category?: string;
  };
}) {
  const categories = await getCategories();
  const category = searchParams?.category;

  return (
    <div className="bg-gray-100 py-6">
      <div className="container">
        <ProductCategories categories={categories} />
        <Suspense key={category} fallback={<ProductsListingSkeleton />}>
          <ProductsListing category={category} />
        </Suspense>
      </div>
    </div>
  );
}
