import { INCREMENTAR } from '../actions/index'

const initialState = {
    number: 1
}

function numberReducer(state=initialState, action) {
    switch (action.type) {
        case INCREMENTAR:
            return {
                ...state,
                number: state.number + action.number
            }
        default:
        return state;
    }
}

export default numberReducer