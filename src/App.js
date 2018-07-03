import React, { Component } from 'react';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import Router from './Router';



class App extends Component{



    initializeFirebase() {
        const firebase = require("firebase");

        // Initialize Firebase
        var config = {
            apiKey: 'AIzaSyDwhbv6VnxWX9mnYsvznhpVgTFj-QEa5uk',
            authDomain: 'manager-79fef.firebaseapp.com',
            databaseURL: 'https://manager-79fef.firebaseio.com',
            projectId: 'manager-79fef',
            storageBucket: 'manager-79fef.appspot.com',
            messagingSenderId: '376825880151'
        };
        firebase.initializeApp(config);


        // //inicializando o firestore
        // const firestore = require("firebase/firestore");
        // db = firebase.firestore();
        // db.settings({ timestampsInSnapshots: true });
    }

    componentWillMount() {

        this.initializeFirebase();

    }


    render(){
const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
              <Router />
            </Provider>
        );
    }

}


export default App;

