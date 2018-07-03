import  React, { Component} from 'react';
import {Picker ,Text } from 'react-native';
import  { connect } from 'react-redux';

import { employeeUpdate, employeeCreate,  } from '../actions';

import { Card, CardSection , Input, Button} from "./common";


class EmployeeCreate extends Component{

    onButtonPress(){
        const {name, phone , shift} = this.props;
        this.props.employeeCreate({name, phone , shift: shift || 'Mondy'});

    }
    render(){

        return(
                <Card>
                    <CardSection>
                        <Input label="Name" placeholder="Insert your name" value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({prop:'name', value: text})}
                        />
                    </CardSection>

                    <CardSection>
                        <Input label="Phone" placeholder="555-55-555" value={this.props.phone}
                         onChangeText={text => this.props.employeeUpdate({prop:'phone', value:text})}
                        />
                    </CardSection>


                    <CardSection styl={{flexDirection:'column'}}>
                        <Text> Select day</Text>
                        <Picker
                            style={{flex:1}}
                            selectedValue={this.props.shift}
                        onValueChange={day=> this.props.employeeUpdate({prop:'shift', value:day})}>
                            <Picker.Item label="Mondy" value="Mondy"/>
                            <Picker.Item label="Sunday" value="Sunday"/>
                            <Picker.Item label="Firsday" value="Firsday"/>
                            <Picker.Item label="Serday" value="Serday"/>
                        </Picker>
                    </CardSection>


                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)} textButton="Create New Account" />
                    </CardSection>
                </Card>

        );
    }

}

const mapStateToProps = (state) => {

    // this is reducer combiner key and send the parametr "employeeForm"
  const {name , phone , shift} = state.employeeForm;
  return {name, phone , shift};

};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate}) (EmployeeCreate);
