import { STUDENT_CHANGED, CREATE_REQUEST, CREATE_REQUEST_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    isim: '',
    soyisim: '',
    numara: '',
    sube: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case STUDENT_CHANGED:
            return { ...state, [action.payload.props]: action.payload.value };
        case CREATE_REQUEST:
            return { ...state, loading: true };
        case CREATE_REQUEST_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};