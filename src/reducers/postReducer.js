import { bindActionCreators } from 'redux';
import { FETCH_POSTS, NEW_POSTS} from '../actions/types.js';

const initialState = {
    characters: [],
    lastCharacter: {}
}
export default function(state=initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            return { ...state,
                characters: action.payload
            }
        case NEW_POSTS:
            return {...state, characters: action.payload, lastCharacter: action.payload[action.payload.length-1]}
        default:
            return state;
    }
}
