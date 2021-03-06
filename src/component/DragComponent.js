import React, { Component } from 'react'
import {  StyleSheet, View, Text, PanResponder } from 'react-native'

 class DragComponent extends Component {

    state = {
        dragging: false,
        initialTop: 50,
        initialLeft: 50,
        offsetTop: 0,
        offsetLeft: 0,
    }

    panResponder = {}

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
            onPanResponderGrant: this.handlePanResponderGrant,
            onPanResponderMove: this.handlePanResponderMove,
            onPanResponderRelease: this.handlePanResponderEnd,
            onPanResponderTerminate: this.handlePanResponderEnd,
        })
    }

    render() {
        const {dragging, initialTop, initialLeft, offsetTop, offsetLeft} = this.state


        const style = {
            backgroundColor: dragging ? 'skyblue' : 'steelblue',
            top: initialTop + offsetTop,
            left: initialLeft + offsetLeft,
        }

        return (
            <View style={styles.container}>
                <View

                    {...this.panResponder.panHandlers}
                    style={[styles.square, style]}
                >
                    <Text style={styles.text}>
                        DRAG ME
                    </Text>
                </View>
            </View>
        )
    }


    handleStartShouldSetPanResponder = (e, gestureState) => {
        return true
    }


    handlePanResponderGrant = (e, gestureState) => {
        this.setState({dragging: true})
    }


    handlePanResponderMove = (e, gestureState) => {


        this.setState({
            offsetTop: gestureState.dy,
            offsetLeft: gestureState.dx,
        })
    }


    handlePanResponderEnd = (e, gestureState) => {
        const {initialTop, initialLeft} = this.state


        this.setState({
            dragging: false,
            initialTop: initialTop + gestureState.dy,
            initialLeft: initialLeft + gestureState.dx,
            offsetTop: 0,
            offsetLeft: 0,
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    square: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:200,
    },
    text: {
        color: 'white',
        fontSize: 12,
    }
})


export default DragComponent;
