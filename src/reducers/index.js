import { combineReducers } from 'redux';
import authenticationCreateReducers from  './authenticationcreatereducers';
import authenticationLoginReducers from './authenticationloginreducers';
import studentsCreateReducers from './studentsCreateReducers';
import studentDataReducers from './studentDataReducers';
import studentUpdateReducers from './studentUpdateReducers';

export default combineReducers({
    authenticationCreateResponse: authenticationCreateReducers,
    authenticationLoginResponse: authenticationLoginReducers,
    studentsCreateResponse: studentsCreateReducers,
    studentDataResponse: studentDataReducers,
    studentUpdateResponse: studentUpdateReducers
});