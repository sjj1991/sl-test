"use client";
import Link from "next/link";
import { useCartStore } from "@/app/lib/store";
import { useEffect, useState } from "react";

export default function CartBtn() {
  const [loaded, setLoaded] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);

  useEffect(() => setLoaded(true), []); // Workaround for using Zustand localStorage

  const cartCount = cartItems.length
    ? cartItems.reduce((acc, val) => acc + val.quantity, 0)
    : 0;

  if (!loaded) return null;

  return (
    <Link href="/cart" className="text-sm font-semibold">
      CART
      {cartCount > 0 && ` (${cartCount})`}
    </Link>
  );
}
