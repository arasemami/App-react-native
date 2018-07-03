import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';


const Input = ({label, placeholder, value, onChangeText, secureTextEntry}) => {

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label} </Text>
            <TextInput
                style={styles.inputStyle}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                underlineColorAndroid='transparent'
                autoCorrect={false}     //its for complate and chek text
                secureTextEntry={secureTextEntry}

            />
        </View>
    );
};

const styles = StyleSheet.create({

    inputStyle: {
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2,



    },

    labelStyle: {
        fontSize:18,
        paddingLeft:20,
         // flex:1
        width:150,
        fontWeight:'600',

    },
    containerStyle:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        width: '100%',
        backgroundColor:'#fff',

        borderBottomWidth: 1,
        borderColor:'#f8f8f8',


    }

});

export {Input};