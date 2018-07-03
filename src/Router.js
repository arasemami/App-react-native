import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {BackAndroid } from 'react-native';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import EmployeeCreate from "./component/EmployeeCreate";
import Test from "./component/Test";
import TimerComponent from './component/Timer';
import FetchComponent from './component/FetchComponent';
import DragComponent from './component/DragComponent';
import PushComponent from "./component/PushComponent";


const RouterComponent = () => {

    return (

        <Router sceneStyle={{paddingTop: 50}}>
            <Scene key="test" >
                <Scene key="tes" component={Test} title="Test" />
            </Scene>
            <Scene key="auth" initial >
                <Scene key="login" component={LoginForm} title="Login Pleas"  />
            </Scene>
          <Scene key="main" >
              <Scene key="employeelist"
                     component={EmployeeList}
                     title="Employee list"
                     rightTitle="Add"
                     onRight={()=>{ Actions.employeeCreate()}}
                     leftTitle="Exit"
                     onLeft={()=> BackAndroid.exitApp()}

              />
              <Scene key="employeeCreate" component={EmployeeCreate} title="Employee Create"  />
              <Scene key="timerComponent" component={TimerComponent} title="Timer"  />
              <Scene key="fetchComponent" component={FetchComponent} title="Fetch Data" />
              <Scene key="dragComponent" component={DragComponent} title="Drag Object" />
              <Scene key="pushComponent" component={PushComponent} title="Push Notification" />
          </Scene>
        </Router>


    );
};

export default RouterComponent;
