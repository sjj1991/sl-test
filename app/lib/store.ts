import { create } from "zustand";
import { Product } from "@/app/lib/definitions";
import { persist } from "zustand/middleware";

interface CartItem {
  item: Product;
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  addItem: (cartItem: CartItem) => void;
  updateItem: (cartItem: CartItem) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartItems: [],

      addItem: ({ item, quantity }) =>
        set((state) =>
          state.cartItems.findIndex((i) => i.item.id === item.id) >= 0
            ? {
                cartItems: state.cartItems.map((i) =>
                  i.item.id === item.id
                    ? { item, quantity: i.quantity + quantity }
                    : i
                ),
              }
            : {
                cartItems: [...state.cartItems, { item, quantity }],
              }
        ),

      updateItem: ({ item, quantity }) =>
        set((state) =>
          quantity > 0
            ? {
                cartItems: state.cartItems.map((i) =>
                  i.item.id === item.id ? { item, quantity } : i
                ),
              }
            : {
                cartItems: state.cartItems.filter((i) => i.item.id !== item.id),
              }
        ),
    }),
    { name: "cart-storage" }
  )
);
