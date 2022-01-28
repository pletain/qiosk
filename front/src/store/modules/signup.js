const GET_NEWB = 'cart/GET_NEWB';

export const getNewb = info => {
    return {
        type: GET_NEWB,
        info,
    };
};

const INITIAL_STATE = {
    info: {
        id: null,
        name: null,
        phoneNumber: null,
        profile_image: null,
    }
}

const signup = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_NEWB:
            return {
                ...state,
                info: action.info
            }
        default:
            return state;
    }
}


export default signup;