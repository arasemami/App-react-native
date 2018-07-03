import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {CardSection} from './common';


class ListItem extends Component {
    render() {
        const {name} = this.props.employee;

        return (

            <CardSection>
                <Text style={styles.titleStyle}>
                    {name}
                </Text>
                <Text>Hello-----------</Text>
            </CardSection>

        );

    }
}

const styles = StyleSheet.create({

    titleStyle: {
        fontSize: 28,
        paddingLeft: 15,

    }

});

export default ListItem;
