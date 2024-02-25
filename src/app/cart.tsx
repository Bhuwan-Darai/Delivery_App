import { View, Text, Platform } from "react-native";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { CartContext, useCart } from "./providers/CartProvider";
import { CartItem, Product } from "@/types";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
};

const CartScreen = () => {
  const { items } = useCart();

  return (
    <View>
      <Text>Carts Items : {items.length}</Text>
    </View>
  );
};

export default CartScreen;
