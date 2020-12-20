import {CONTENTLISTINGFIRST} from '../Type/ActionTypes';
import list1 from '../../API/CONTENTLISTINGPAGE-PAGE1.json';

const InitialState = {
    firstList:list1
}

const FirstListDetails = (state = InitialState, action) => {
    switch(action.type){
        case CONTENTLISTINGFIRST:
            return {
                ...state,
                firstList:state.firstList
            }
        default:
            return state
    }
}

export default FirstListDetails
