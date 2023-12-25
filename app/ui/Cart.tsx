"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/app/lib/store";
import Link from "next/link";
import Quantity from "@/app/ui/Quantity";
import { formatCurrency } from "@/app/lib/utils";

export default function Cart() {
  const [loaded, setLoaded] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);
  const updateItem = useCartStore((state) => state.updateItem);

  useEffect(() => setLoaded(true), []); // Workaround for using Zustand localStorage

  if (!loaded) return null;

  return (
    <div className="flex gap-8 flex-wrap md:flex-nowrap">
      <CartList />
      <CartSummary />
    </div>
  );

  function CartList() {
    return (
      <div className="grid gap-6 flex-1">
        {cartItems.map(({ item, quantity }) => (
          <div
            key={item.id}
            className="flex items-start gap-4 border-b border-gray-200 pb-6"
          >
            <Link href={`/product/${item.id}`}>
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={100}
                height={100}
                className="aspect-square object-cover"
              />
            </Link>
            <div className="flex items-start gap-4 flex-1 flex-col sm:flex-row">
              <div className="flex-1">
                <Link className="font-semibold" href={`/product/${item.id}`}>
                  {item.title}
                </Link>
                <div className="text-sm text-gray-500 capitalize">
                  {item.brand}
                  <br />
                  {item.category}
                </div>
              </div>
              <Quantity
                count={quantity}
                onClickMinus={() =>
                  updateItem({ item, quantity: quantity - 1 })
                }
                onClickPlus={() => updateItem({ item, quantity: quantity + 1 })}
              />
              <div>
                <div className="font-semibold">
                  {formatCurrency(item.price * quantity)}
                </div>
                <button
                  className="text-sm text-gray-400 underline"
                  onClick={() => updateItem({ item, quantity: 0 })}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  function CartSummary() {
    const totalPrice = cartItems.reduce(
      (acc, val) => acc + val.item.price * val.quantity,
      0
    );
    return (
      <div className="grid gap-3 content-start w-full md:w-64 lg:w-80 md:border-l md:border-r border-gray-200 md:px-4">
        <div className="text-xl font-semibold mb-4">Cart Summary</div>
        <div className="flex justify-between text-sm text-gray-500">
          <div>Non-Direct Pricing</div>
          <div>{formatCurrency(Math.ceil(totalPrice * 1.1))}</div>
        </div>
        <div className="flex justify-between text-xl font-semibold">
          <div>Total</div>
          <div>{formatCurrency(totalPrice)}</div>
        </div>
        <button className="btn-primary" disabled>
          Checkout Securely →
        </button>
      </div>
    );
  }
}
