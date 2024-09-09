import { useEffect } from "react";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
const initial_value = {
  counter: 0,
  productList: [],
  cartItemsList: [],
  categoryNameList: [],
};

export const fetchData = () => {
  return async (dispatch) => {
    const responce = await fetch("https://dummyjson.com/products");
    const data = await responce.json();
    dispatch({ type: "Fetch_Data", payload: data.products });

    const categoryName = [
      ...new Set(data.products.map((item) => item.category)),
    ];
    dispatch({ type: "Get_category", payload: ["All", ...categoryName] });
  };
};

const productsReducer = (state = initial_value, action) => {
  switch (action.type) {
    case "Get_category":
      return {
        ...state,
        categoryNameList: action.payload,
      };
    case "Fetch_Data":
      return {
        ...state,
        productList: action.payload,
      };

    case "Add_To_Cart": {
      const itemToAdd = state.productList.find(
        (item) => item.id === action.payload
      );

      return {
        ...state,
        cartItemsList: [
          ...state.cartItemsList,
          { ...itemToAdd, quantity: 1, total: itemToAdd.price },
        ],
      };
    }

    case "Quantity_Increment": {
      const quantityIncrement = state.cartItemsList.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      return {
        ...state,
        cartItemsList: quantityIncrement,
      };
    }

    case "Quantity_Decrement": {
      const quantityDecrement = state.cartItemsList.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      return {
        ...state,
        cartItemsList: quantityDecrement,
      };
    }

    case "Delete_Cart_Items": {
      const cartItemsDel = state.cartItemsList.filter((item) => {
        return item.id !== action.payload;
      });

      return {
        ...state,
        cartItemsList: cartItemsDel,
      };
    }

    default:
      return state;
  }
};

export const productstore = createStore(
  productsReducer,
  applyMiddleware(thunk)
);

const subscriber = () => {
  const state = productstore.getState();
};

productstore.subscribe(subscriber);
