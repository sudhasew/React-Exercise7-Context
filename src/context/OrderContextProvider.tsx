import { ReactNode, useState } from "react";
import { Item } from "../services/Item";
import { OrderContext } from "./OrderContext";
// interface Props {
//   children: ReactNode;
// }

export function OrderContextProvider(props: { children: ReactNode }) {
  const [order, setItems] = useState<Item[]>([]);

  function addItem(item: Item) {
    setItems([...order, item]);
  }
  function removeItem(id: string) {
    // setItems([...order]);
  }
  return (
    <OrderContext.Provider value={{ order, addItem, removeItem }}>
      {props.children}
    </OrderContext.Provider>
  );
}
