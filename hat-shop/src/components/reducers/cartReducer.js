import product from "../../assets/product.json";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "../actions/action-types/cart-actions";
// import { compose } from "redux";

const initState = {
  items: product,
  addedItems: [],
  total: 0,
  setTotal: total => {
    localStorage.setItem("total", parseFloat(total.toFixed(2)));
  },
  saveCart: (cart, cartTotal) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", parseFloat(cartTotal.toFixed(2)));
  },
  loadCart: (localCart, cartTotal) => {
    if (localCart !== null) {
      initState.addedItems = JSON.parse(localCart);
    }
    if (cartTotal !== null) {
      initState.total = parseFloat(cartTotal);
    }
  }
};

initState.loadCart(localStorage.getItem("cart"), localStorage.getItem("total"));

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem = {
      name: addedItem.name,
      id: addedItem.id,
      images: addedItem.images,
      sizeWanted: action.size,
      quantity: action.count,
      price: addedItem.price
    };
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      existed_item.quantity += addedItem.quantity;
      state.saveCart(
        state.addedItems,
        state.total + existed_item.price * existed_item.quantity
      );
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
      let newTotal = state.total + addedItem.price * addedItem.quantity;
      state.saveCart([...state.addedItems, addedItem], newTotal);
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    state.saveCart(new_items, newTotal);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      existed_item.quantity = parseInt(existed_item.quantity) + 1;
      let newTotal = state.total + existed_item.price;
      state.saveCart(state.addedItems, newTotal);
      return {
        ...state,
        total: newTotal
      };
    }
  }
  if (action.type === SUB_QUANTITY) {
    let existed_item = state.addedItems.find(item => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (existed_item.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - existed_item.price;
      state.saveCart(state.addedItems, newTotal);
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      existed_item.quantity -= 1;
      let newTotal = state.total - existed_item.price;
      state.saveCart(state.addedItems, newTotal);
      return {
        ...state,
        total: newTotal
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6
    };
  } else {
    return state;
  }
};

export default cartReducer;
