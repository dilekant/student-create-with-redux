import { Alert } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { USERNAME_CHANGED, EMAIL_CHANGED, PASSWORD_CHANGED, CREATE_USER, LOGIN_USER, CREATE_LOGIN_USER_SUCCESS, CREATE_LOGIN_USER_FAIL, CREATE_LOGIN_USER_BLANKS } from './types';

export const usernameChanged = (username) => {
    return(dispatch) => {
        dispatch({
            type: USERNAME_CHANGED,
            payload: username
        });
    };
};

export const emailChanged = (email) => {
    return(dispatch) => {
        dispatch({
            type: EMAIL_CHANGED,
            payload: email
        });
    };
};

export const passwordChanged = (password) => {
    return(dispatch) => {
        dispatch({
            type: PASSWORD_CHANGED,
            payload: password
        });
    };
};

export const createUser = ({ email, password, username }) => {
    return (dispatch) => {
        dispatch({ type: CREATE_USER });
        if (email === '' || password === '' || username === '' ) {
            createLoginBlank(dispatch);
        } 
        else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => createLoginSuccess(dispatch, user))
                //.catch(() => createLoginFail(dispatch));
        }
    };
};

export const loginUser = ({ email, password }) => {
    return(dispatch) => {
        dispatch({ type: LOGIN_USER });
        if(email === '' || password === '') {
            createLoginBlank(dispatch);
        }
        else {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => createLoginSuccess(dispatch, user))
                .catch(() => createLoginFail(dispatch));
        }
    };
};

const createLoginFail = (dispatch) => {
    Alert.alert(
      'Mesaj',
      'Kullanıcı bilgileri hatalı',
      [
        { text: 'Tamam', onPress: () => null }
      ]
    );
    dispatch({
      type: CREATE_LOGIN_USER_FAIL
    });
};
  
const createLoginSuccess = (dispatch, user) => {
    dispatch({
      type: CREATE_LOGIN_USER_SUCCESS,
      payload: user
    });
    Actions.studentList();
};

const createLoginBlank = (dispatch) => {
    Alert.alert(
        'Mesaj',
        'Tüm alanlar Dolu olmalı!',
        [
          { text: 'Tamam', onPress: () => null }
        ]
    );
    dispatch({
        type: CREATE_LOGIN_USER_BLANKS
    });
};