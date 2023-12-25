"use client";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { Product } from "@/app/lib/definitions";
import { MotionDiv } from "@/app/ui/MotionDiv";
import { bottomIn } from "@/app/lib/anim";

export default function ProductImages({
  images,
  className,
}: {
  images: Product["images"];
  className?: string;
}) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <MotionDiv
      variants={bottomIn()}
      className={clsx("w-full sm:w-5/12 md:w-4/12", className)}
    >
      <Image
        src={selectedImage}
        alt={selectedImage} // To be replaced with image description which should be returned from API
        width={500}
        height={500}
        className="aspect-square object-cover mb-6"
      />

      <div className="grid grid-cols-4 gap-2">
        {images.map((image) => (
          <Image
            key={image}
            src={image}
            alt={image}
            width={100}
            height={100}
            className="aspect-square object-cover cursor-pointer"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </MotionDiv>
  );
}
