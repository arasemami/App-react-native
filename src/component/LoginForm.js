import React, {Component} from 'react';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {Text, StyleSheet, View} from 'react-native';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);

    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});

    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large"/>
        }
        return (
            <Button
                onPress={this.onButtonPress.bind(this)}
                textButton="Login"/>
        );
    }

    renderError() {
        if (this.props.error) {
            return (
                <CardSection>
                    <View>
                        <Text style={styles.errorStyles}>
                            error: {this.props.error}
                        </Text>
                    </View>
                </CardSection>
            );
        }
    }

    render() {

        return (

            <Card>

                <CardSection>
                    <Text style={styles.titleStyle}>Login Form</Text>
                </CardSection>


                <CardSection>
                    <View>
                        <Text>user:aras@gmail.com</Text>
                        <Text>password:123456</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Input
                        label="Email"
                        placeholder="example@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />

                </CardSection>


                <CardSection>
                    <Input
                        label="Password"
                        placeholder="****"
                        secureTextEntry={true}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>


                <CardSection>
                    {this.renderButton()}
                </CardSection>

                {this.renderError()}
            </Card>
        );
    }

}

// const mapStateToProps = state => {
//   return{
//       email: state.auth.email,
//       password: state.auth.password,
//       error:state.auth.error,
//       loading:state.auth.loading
//   };
// };

const mapStateToProps = ({auth}) => {

    const {email, password, error, loading} = auth;

    return {email, password, error, loading}
};


const styles = StyleSheet.create({

    titleStyle: {
        fontSize: 22,
        textAlign: 'center',
        alignSelf: 'center',
        width: '100%',
        padding: 30,
        fontWeight: 'bold',
    },
    errorStyles: {
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
        color: '#d53810'
    }


});


export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);

