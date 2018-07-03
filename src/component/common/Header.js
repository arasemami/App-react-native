import React   from 'react';
import {View, Text, StyleSheet} from 'react-native';



const Header = (props)=>{

    return(
        <View style={styles.HeaderView} >
            <Text style={styles.HeaderStyle} >{props.headerText}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    HeaderView:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // its for android
        elevation:3,
        position:'relative',

    },

    HeaderStyle:{
        fontSize:20,
        fontWeight:'700',



    }
});


export { Header };

