import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ListItem extends Component {
  
  ogrenciClick() {
    Actions.studentUpdate({ student: this.props.ogrenci });
  }

  render() {
    const { isim, soyisim } = this.props.ogrenci;
    return (
        <TouchableWithoutFeedback onPress={this.ogrenciClick.bind(this)}>
            <View style={{ width:'90%', marginLeft: '5%', borderBottomWidth: 2, padding: 15, borderColor: '#ADADAD', }}>
                <Text>
                {isim} {soyisim}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
  }
}