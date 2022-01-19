const ADD_ITEM = 'cart/ADD_ITEM';
const DELETE_ITEM = 'cart/DELETE_ITEM';
const INCREMENT = 'cart/INCREMENT';
const DECREMENT = 'cart/DECREMENT';
const CLEAN = 'cart/CLEAN';
const TOTAL = 'cart/TOTAL';
const RECORD = 'cart/RECORD';


export const addCart = item => {
    return {
        type: ADD_ITEM,
        item,
    };
};

export const deleteCart = item => {
    return {
        type: DELETE_ITEM,
        item,
    };
};

export const increment = item => {
    return {
        type: INCREMENT,
        item,
    };
};

export const decrement = item => {
    return {
        type: DECREMENT,
        item,
    };
};

export const cleanCart = () => {
    return {
        type: CLEAN,
    };
};

export const total = () => {
    return {
        type: TOTAL,
    };
};

export const recordTable = tbnum => {
    return {
        type: RECORD,
        tbnum,
    };
};

const INITIAL_STATE = {
    cart: [
    ],
    total: 0,
    table: null,
};

// {
//     id: 1,
//     itemname: "가츠동",
//     price: 7000, 
//     quantity: 2, 
//     description: "국내산 '生' 안심 돈까스",
// },
// {
//     id: 2,
//     itemname: "에비동",
//     price: 8500, 
//     quantity: 1, 
//     description: "국내산 '生' 안심 돈까스",
// }

const cart = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const find = state.cart.find(item => item.id === action.item.id);
            if (find === undefined) {
                return {
                    ...state,
                    cart: state.cart.concat(action.item)
                };
            } else {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.item.id ? { ...item, quantity: item.quantity + 1 } : item)
                };
            }
        case DELETE_ITEM:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.item.id)
            };
        case INCREMENT:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.item.id ? { ...item, quantity: item.quantity + 1 } : item)
            };
        case DECREMENT:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.item.id ? { ...item, quantity: item.quantity - 1 } : item)
            };
        case CLEAN:
            return {
                ...state,
                cart: []
            };
        case TOTAL:
            let sum = 0;
            sum += state.cart.map(item => item.price * item.quantity);
            return {
                ...state,
                total: sum
            };
        case RECORD:
            return {
                ...state,
                table: action.tbnum
            }
        default:
            return state;
    }

}

export default cart;