import React , { Component} from 'react';
import {View , Text, StyleSheet} from 'react-native';



class TimerComponent extends Component{

    state ={ count:0}


    componentWillMount(){
        setInterval(()=> {
            this.setState({count: this.state.count + 1})
        }, 1000 )
    }


    render(){

        const {count}= this.state;
        const {color, size} = this.props;



        return(
            <View style={styles.container}>
                <Text style={styles.one}>   {count} </Text>
                <Text style={styles.two}>   {count} </Text>
                <Text style={styles.three}> {count} </Text>
                <Text style={styles.four}> {count} </Text>
            </View>

        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    one:{
        color:'lightblue',
        fontSize:16,

    },
    two:{
        color:'skyblue',
        fontSize:32,
    },
    three:{
        color:'steelblue',
        fontSize:80,
    },
    four:{
        color:'darkblue',
        fontSize:140,
    }

})

export default TimerComponent;
