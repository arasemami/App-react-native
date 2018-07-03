"use strict";

import React, {Component} from "react";
import UUIDGenerator from 'react-native-uuid-generator';
import { Actions} from 'react-native-router-flux';



import {
    StyleSheet,
    View,
    TextInput,
    Button,
} from "react-native";


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailAddress: "",
            passWord: "",
            uuid:""
        };
    }


    onPressSubmitButton() {
        UUIDGenerator.getRandomUUID((uuid) => {
           this.setState({uuid:uuid});
        });
        this.onFetchLoginRecords();
    }







    render() {
        return (
            <View style={loginStyles.container}>
                <TextInput
                    ref="txtEmail"
                    style={loginStyles.textInput}
                    placeholder="Email Address"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={event => {
                        this.refs.txtPassword.focus();
                    }}
                    onChangeText={text => this.setState({emailAddress: text})}
                />
                <TextInput
                    ref="txtPassword"
                    style={loginStyles.textInput}
                    placeholder="Password"
                    returnKeyType="done"
                    secureTextEntry={true}
                    onChangeText={text => this.setState({passWord: text})}
                />
                <Button
                    title="Submit"
                    color="#841584"
                    onPress={this.onPressSubmitButton.bind(this)}
                />
            </View>
        );
    }

    async onFetchLoginRecords() {
        var data = {
            email: this.state.emailAddress,
            password: this.state.passWord,
            uuid:this.state.uuid
        };

        try {
            let response = await fetch(
                "http://staging.nlplife.ir/Api/V1/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"

                    },
                    body: JSON.stringify(data)
                }

            );
            console.log(this.state.uuid);
            console.log(this.state.passWord + '+' + this.state.emailAddress);
            if (response.status >= 200 && response.status < 300) {
               // alert("authenticated successfully!!!");
                Actions.main();
            }
            else {
                alert("authenticated Fail!!!");
            }
        } catch (errors) {

            alert(errors);
        }
    }


}


const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#F5FCFF"
    },
    textInput: {
        height: 50,
        margin:10,
        textAlign: "center",
        fontSize:18,
        width: "80%"
    },
    buttonSubmit: {
        color: "#841584",
        width:'100%'
    }
});