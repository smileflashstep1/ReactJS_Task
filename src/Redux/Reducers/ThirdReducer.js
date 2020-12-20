import { CONTENTLISTINGTHIRD } from '../Type/ActionTypes';
import list3 from '../../API/CONTENTLISTINGPAGE-PAGE3.json';

const InitialState = {
    thirdList: list3
}

const ThirdListDetails = (state = InitialState, action) => {
    switch (action.type) {
        case CONTENTLISTINGTHIRD:
            return {
                ...state,
                thirdList: state.thirdList
            }
        default:
            return state
    }
}

export default ThirdListDetails
