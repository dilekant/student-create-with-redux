import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { studentsListData } from '../actions';
import ListItem from '../components/ListItem';

class StudentList extends Component {

  componentDidMount(){
    this.props.studentsListData();
  };

  renderRow({ item, index }) {
    return <ListItem ogrenci={item} />;
  }

  render() {
    return (
      <FlatList
      data = {this.props.studentsArray}
      renderItem = {this.renderRow}
      keyExtractor = {(item, index) => index.toString()}
      />
    );
  }
}

const mapStateToProps = ({ studentDataResponse }) => {
  const studentsArray = _.map(studentDataResponse, (val, uid) => {
    return { ...val, uid };
  });
  return { studentsArray };
};

export default connect(mapStateToProps, { studentsListData })(StudentList);