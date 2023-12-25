"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MotionDiv } from "@/app/ui/MotionDiv";
import { sectionVariants } from "@/app/lib/anim";

export default function ProductCategories({
  categories,
}: {
  categories: string[];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentCategory = searchParams.get("category");

  const categoryUrl = (category: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", category);
    return `${pathname}?${params.toString()}`;
  };

  return (
    <MotionDiv
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <nav className="hidden md:flex flex-wrap gap-4 justify-center mb-6 text-sm font-semibold">
        {categories.map((category) => (
          <Link
            key={category}
            className={clsx("uppercase hover:text-red-700", {
              "text-red-700": category === currentCategory,
            })}
            href={categoryUrl(category)}
          >
            {category.replace("-", " ")}
          </Link>
        ))}
      </nav>
      <select
        className="md:hidden mb-6 w-full"
        onChange={(e) => replace(categoryUrl(e.target.value))}
        value={currentCategory ?? "category"}
      >
        <option value="category">Product category</option>
        {categories.map((category) => {
          const categoryTitle = category.replace("-", " ");
          return (
            <option key={category}>
              {categoryTitle[0].toUpperCase() + categoryTitle.slice(1)}
            </option>
          );
        })}
      </select>
    </MotionDiv>
  );
}
