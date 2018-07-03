import {combineReducers} from 'redux';

 // Reducer Files - - - - - - - - -
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';



export default combineReducers({
    // make key for called reducer - - - -
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
});