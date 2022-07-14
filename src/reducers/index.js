import {ACTION_TYPES} from '../actions/'

export const INITIAL_STATE = {language: "ENGLISH"}

const reducer = (state, action) => {
    switch(action.type){
        case ACTION_TYPES.SET_LANGUAGE:
            return {
                ...state,
                language: action.language
            }
        default:
            return state
    }
}

export default reducer