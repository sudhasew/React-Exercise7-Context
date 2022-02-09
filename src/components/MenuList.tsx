import { useEffect, useState } from "react";
import { Item } from "../services/Item";
import { useContext } from "react";
import { MenuItem } from "./MenuItem";
import { OrderContext } from "../context/OrderContext";

export function MenuList() {
  const { order, addItem, removeItem } = useContext(OrderContext);
  const menuArray: Item[] = [
    {
      id: "abc123",
      name: "Chicken and Waffles",
      description:
        "Fluffy waffles topped with lightly breaded chicken and maple syrup",
      price: 7.5,
      vegetarian: false,
      calories: 1100,
    },
    {
      id: "abc124",
      name: "Eggs benedict",
      description:
        "English muffin, each topped with Canadian bacon, a poached egg, and hollandaise sauce.",
      price: 6.75,
      vegetarian: false,
      calories: 550,
    },
    {
      id: "abc125",
      name: "Avocado Toast",
      description:
        "Smashed avocado, cojita cheese, shaved veg, cilantro, green chilli, watercress",
      price: 10.75,
      vegetarian: true,
      calories: 640,
    },
    {
      id: "abc126",
      name: "Beans on Toast",
      description:
        "Roasted mushrooms, poached egg, sweet peppers, pistachios, cashew butter",
      price: 9.25,
      vegetarian: false,
      calories: 800,
    },
    {
      id: "abc127",
      name: "Hash wrap",
      description:
        "Potato hash, smoked pork belly, egg, kale salad, bagna cauda sauce",
      price: 10.0,
      vegetarian: false,
      calories: 875,
    },
    {
      id: "abc128",
      name: "Cinnamon Roll",
      description:
        "Freshly baked rolls made from scratch topped with vanilla frosting",
      price: 4.5,
      vegetarian: true,
      calories: 970,
    },
    {
      id: "abc129",
      name: "Lox Bagel",
      description:
        "Smoked salmon, cream cheese and capers on top of a freshly baked sesame seed bagel",
      price: 8.5,
      vegetarian: false,
      calories: 1050,
    },
  ];

  // const [items, setItems] = useState<Item[]>([]);
  // const { order } = useContext(OrderContext);

  return (
    <div className="MenuItem">
      <ul>
        {menuArray.map((item) => (
          <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Calories: {item.calories}</p>
            <p>Price: {item.price}</p>
            <p>{item.vegetarian ? "vegetarian" : "not vegetarian"}</p>
            <button className="addToCart">Add To Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
