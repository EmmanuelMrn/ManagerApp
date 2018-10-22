import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, FlatList, Text } from 'react-native';
import ListItem from './ListItem';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();

        //this.createDataSource(this.props);
    }
    
    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that this component 
        //will be rendered with this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        return (
          <FlatList
            data={this.props.employees}
            renderItem={({ item }) => 
            <Text>
                {item.name}
            </Text>
            } // Only for test
          />
        );
      }
    }


    const mapStateToProps = state => {
        const employees = _.map(state.employees, (employee, uid) => ({
            ...employee,
            key: uid
        }));
        return { employees };
     };
 
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
