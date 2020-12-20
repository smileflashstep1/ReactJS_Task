import { CONTENTLISTINGSECOND } from '../Type/ActionTypes';
import list2 from '../../API/CONTENTLISTINGPAGE-PAGE2.json';

const InitialState = {
    secondList: list2
}

const SecondListDetails = (state = InitialState, action) => {
    switch (action.type) {
        case CONTENTLISTINGSECOND:
            return {
                ...state,
                secondList: state.secondList
            }
        default:
            return state
    }
}

export default SecondListDetails
