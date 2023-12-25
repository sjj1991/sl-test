"use client";
import { useEffect, useState } from "react";
import { Product } from "@/app/lib/definitions";
import { useCartStore } from "@/app/lib/store";
import Quantity from "@/app/ui/Quantity";

export default function AddToCart({ product }: { product: Product }) {
  const [count, setCount] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    if (added) {
      const timer = setTimeout(() => setAdded(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [added]);

  function handleAddToCart() {
    if (!added) {
      setCount(1);
      setAdded(true);
      addItem({ item: product, quantity: count });
    }
  }

  return (
    <div className="grid gap-3 mt-3">
      <div className="bg-gray-100 rounded p-3 flex justify-between">
        <div className="font-semibold">Quantity</div>
        <Quantity
          count={count}
          onClickMinus={() => setCount((v) => v - 1)}
          onClickPlus={() => setCount((v) => v + 1)}
        />
      </div>
      <button className="btn-primary" onClick={() => handleAddToCart()}>
        {added ? "Added to cart" : "Add to cart"}
      </button>
    </div>
  );
}
