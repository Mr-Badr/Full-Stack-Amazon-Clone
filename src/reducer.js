/* 
    • explanation of how the Reducer works : 
      • when i click at "Add to Basket Button", we will Dispatch this action to the DataLayer (Push)
      • and the put it at the Basket (Pull)

    • The context API redux is NOT the same thing, But is the same PATTERN 
    
    • The Reducer Just like a Listener
*/

export const initialState = {
  basket: [],
};

//selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

// the state is the state of our application
 // const reducer = ..... code here

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      case "REMOVE_FROM_BASKET":
        let newBasket = [...state.basket];
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        if (index >= 0) {
          newBasket.splice(index, 1);
        }
        return { ...state, basket: newBasket };
        
      case "EMPTY_BASKET":
        return {
          ...state,
          basket: [],
        };

    default:
      return state;
  }
};

export default reducer;