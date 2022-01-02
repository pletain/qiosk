import { createActions } from 'redux-actions';

//action type
const ADD_TO_CART = 'cart/ADD_TO_CART';
const DELETE_FROM_CART = 'cart/DELETE_FROM_CART';
const EMPTY_CART = 'cart/EMPTY_CART';
const TOTALPRICE = 'cart/TOTALPRICE';

export const addToCart = createActions(ADD_TO_CART, item => item);

export const deleteFromCart = createActions(DELETE_FROM_CART, item => item.id);

export const emptyCart = createActions(EMPTY_CART);

export const totalPrice = createActions(TOTALPRICE);

const initialState = {
    orderList: [
        {
            id: 1,
            itemname: "가츠동",
            quantity: 2,
            price: "7000",
        },
        {
            id: 2,
            itemname: "사케동",
            quantity: 1,
            price: "8500",
        }
    ]
};


const cart = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const find = state.orderList.find(item => item.id === action.item.id);
            if (find === undefined) {
                return {
                    ...state,
                    orderList: state.orderList.concat(action.item)
                };
            } else {
                return {
                    ...state,
                    orderList: state.orderList.map(item => 
                        item.id === action.item.id ? { ...item, quantity: item.quantity + 1 } : item)
                };
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                orderList: state.orderList.filter(item => item.id !== action.item.id)
            };
        case EMPTY_CART:
            return {
                orderList: []
            };
        case TOTALPRICE:
            let sum = 0;
            sum += state.orderList.map(item => item.price * item.quantity);
            return {
                ...state,
                totalPrice: sum
            };
        default:
            return state;
    }

}

export default cart;