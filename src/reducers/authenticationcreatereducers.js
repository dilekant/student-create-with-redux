import { USERNAME_CHANGED, EMAIL_CHANGED, PASSWORD_CHANGED, CREATE_USER, CREATE_LOGIN_USER_SUCCESS, CREATE_LOGIN_USER_FAIL, CREATE_LOGIN_USER_BLANKS } from '../actions/types';

const INITIAL_STATE = {
    email: '',
    username: '',
    password: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USERNAME_CHANGED:
            return { ...state, username: action.payload };
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case CREATE_USER:
            return { ...state, loading: true };
        case CREATE_LOGIN_USER_SUCCESS:
            return { ...state, loading: false};
        case CREATE_LOGIN_USER_FAIL:
            return { ...state, loading: false };
        case CREATE_LOGIN_USER_BLANKS:
            return { ...state, loading: false };
        default:
            return state;
    }
};