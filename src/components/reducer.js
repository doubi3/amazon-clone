export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

export const  initialState = {
    basket: [{
        id: "0138",
        title: "Playstation 4",
        image: "https://images-na.ssl-images-amazon.com/images/I/61OL2zIliML._AC_UL160_SR160,160_.jpg",
        price: 299.99,
        rating: 4
    }],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
             };
        case 'REMOVE_FROM_BASKET':

             let newBasket = [...state.basket];
             const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {

                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket `
                );
            }


            return { 
                ...state, 
                basket: newBasket 
            };
        default:
            return state;
    }
};

export default reducer;