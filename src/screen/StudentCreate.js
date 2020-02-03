import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Picker } from 'react-native';
import { connect } from 'react-redux';
import { studentChange, studentCreate } from '../actions';
import Button from '../components/Button';
import Spinner from '../components/Spinner';

class StudentCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clickSave(){
    const { isim, soyisim, numara, sube } = this.props;
    this.props.studentCreate({ isim, soyisim, numara, sube });
  }

  renderButton(){
    if(!this.props.loading) {
      return <Button onPress={this.clickSave.bind(this)}> KAYDET </Button>;
    }
    return <Spinner size="small" />;
  }

  render() {
    return (
      <View style = {styles.loginView}>
          <View style = {{marginTop:'5%'}}>
            <Text style={{fontSize:15}}>Adı</Text>
            <View style={styles.textInputView}>
              <TextInput
                style={styles.textInputStyles}
                placeholder="Öğrenci Adı"
                placeholderTextColor='#CBCBCB'
                value={this.props.isim}
                onChangeText={isim => this.props.studentChange({ props: 'isim', value: isim })}
              />
            </View>
          </View>
          <View style = {{marginTop:'5%'}}>
            <Text style={{fontSize:15}}>Soyadı</Text>
            <View style={styles.textInputView}>
              <TextInput
                style={styles.textInputStyles}
                placeholder="Öğrenci Soyadı"
                placeholderTextColor='#CBCBCB'
                value={this.props.soyisim}
                onChangeText={soyisim => this.props.studentChange({ props: 'soyisim', value: soyisim })}
              />
            </View>
          </View>
          <View style = {{marginTop:'5%'}}>
            <Text style={{fontSize:15}}>Öğrenci Numarası</Text>
            <View style={styles.textInputView}>
              <TextInput
                style={styles.textInputStyles}
                placeholder="Öğrenci Numarası"
                placeholderTextColor='#CBCBCB'
                value={this.props.numara}
                onChangeText={numara => this.props.studentChange({ props: 'numara', value: numara })}
              />
            </View>
          </View>
          <View style = {{marginTop:'5%'}}>
            <Text style={{fontSize:15}}>Şube</Text>
            <View style = {{borderBottomWidth: 2, flexDirection: 'row', borderColor: '#ADADAD'}}>
              <Picker
                  style={{flex:1}} 
                  selectedValue={this.props.sube}
                  onValueChange={sube => this.props.studentChange({ props:'sube', value: sube })}>
                      <Picker.Item label="Şube Seçiniz" value="subeyok" />
                      <Picker.Item label="A şubesi" value="asube" />
                      <Picker.Item label="B şubesi" value="bsube" />
                      <Picker.Item label="C şubesi" value="csube" />
                      <Picker.Item label="D şubesi" value="dsube" />
                  </Picker>
            </View>
          </View>
          <View>
            {this.renderButton()}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  loginView: { 
    width: '80%', 
    marginLeft: '10%'
  },
  imageStyle: {
    width: 20,
    height: 20,
  },
  textInputView:{
    flexDirection: 'row',
    borderBottomWidth:2,
    borderBottomColor: '#ADADAD'
  },
  imageStyleView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    height: 50,
  },
  textInputStyles: {
    height: 50,
    width: '100%',
    fontSize: 15,
    padding: 10,
  },
  LinearGradientStyle: {
    height: 50,
    justifyContent: 'center',
    borderRadius:25,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color : '#fff',
  },
  textView: {
    marginTop:30, 
    alignItems:'center', 
    justifyContent:'center'
  },
  
  bottomView: {
    marginTop:150, 
    height:20,
    justifyContent:'center', 
    flexDirection:'row'
  },
  signUpView: {
    borderBottomColor:'#3CA9F6', 
    borderBottomWidth:2,
  },
});

const mapToStateProps = ({ studentsCreateResponse }) => {
  const { isim, soyisim, numara, sube, loading } = studentsCreateResponse;
  return {
    isim,
    soyisim,
    numara,
    sube,
    loading
  };
};

export default connect(mapToStateProps, { studentChange, studentCreate })(StudentCreate);