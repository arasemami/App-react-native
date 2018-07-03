import React from 'react';
import { View , Text, StyleSheet } from 'react-native';


const Card = (props) => {

    return (
        <View style={ styles.continerStyle}>

            {props.children}
        </View>

    );
};



const styles = StyleSheet.create({

    continerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,
        elevation:2,
        marginLeft:5,
        marginRight:5,
        marginTop:10,


    }

});
export    {Card};
