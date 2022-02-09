import { createContext } from "react";
import { Item } from "../services/Item";

export interface OrderContext {
  order: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
}

const defaultValue: OrderContext = {
  order: [],
  addItem: () => {},
  removeItem: () => {},
};

export const OrderContext = createContext<OrderContext>(defaultValue);
