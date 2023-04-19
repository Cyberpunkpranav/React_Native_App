

const initialState = {
    loggedin:false,
    user:null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                loggedin: true,
                user: action.payload
            };
            case 'LOGOUT':
            return {
                loggedin: false,
                user: null
            }
            default:
                return state;
    }
}
export{loginReducer}