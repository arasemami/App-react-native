import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({onPress ,textButton}) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{textButton}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({

    textStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        marginTop:10,
        marginBottom:10,


    },

    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5,
        width:100,

    }

})



export { Button};

