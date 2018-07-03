import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

// install lodash -----  npm install --save lodash
import {ListView, View, Text} from 'react-native';
import {employeesFetch} from '../actions';
import  ListItem  from './ListItem';

import {Card, CardSection, Button} from "./common";

class EmployeeList extends Component {

    componentWillMount() {

        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {

        this.createDataSource(nextProps);
    }

    createDataSource({employees}) {

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);

    }

    renderRow(employee) {
        alert("sss");
        return <ListItem employee={employee} />;
    }

    openTimer(){

        Actions.timerComponent();
    }

    FetchPress(){

        Actions.fetchComponent();
    }

    DragOpen(){
        Actions.dragComponent();
    }

    PushOpen(){
        Actions.pushComponent();
    }



    render() {
        console.log(this.props);

        return (


            <Card>
                <CardSection>
                    <Button
                        textButton="Timer"
                        onPress={this.openTimer.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Button
                        textButton="Fetch Data list"
                        onPress={this.FetchPress.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Button
                        textButton="Drag Object"
                        onPress={this.DragOpen.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Button
                        textButton="Push Notification"
                        onPress={this.PushOpen.bind(this)}
                    />
                </CardSection>

                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </Card>


        );
    }

}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid } ;
    });

    return {employees};


};


export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
