import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Picker } from 'react-native';
import { connect } from 'react-redux';
import { studentChange, studentUpdate, studentDelete } from '../actions';
import Button from '../components/Button';
import Spinner from '../components/Spinner';

class StudentUpdate extends Component {
    state = {
        isim: '',
        soyisim: '',
        numara: '',
        sube: '',
    };

    componentWillMount(){
        const { isim, soyisim, numara, sube } = this.props.student;
        this.setState({ isim, soyisim, numara, sube });
    }

    clickUpdate(){
        const { isim, soyisim, numara, sube } = this.state;
        this.props.studentUpdate({ isim, soyisim, numara, sube, uid: this.props.student.uid });
    }

    clickDelete(){
        this.props.studentDelete({ uid: this.props.student.uid });
    }

    renderButton(){
        if(!this.props.loadingUpdate) {
        return <Button onPress={this.clickUpdate.bind(this)}> GÜNCELLE </Button>;
        }
        return <Spinner size="small" />;
    }

    renderDeleteButton(){
        if(!this.props.loadingDelete) {
            return <Button onPress={this.clickDelete.bind(this)}> SİL </Button>;
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
                    value={this.state.isim}
                    onChangeText={isim => this.setState({ isim })}
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
                    value={this.state.soyisim}
                    onChangeText={soyisim => this.setState({ soyisim })}
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
                    value={this.state.numara}
                    onChangeText={numara => this.setState({ numara })}
                />
                </View>
            </View>
            <View style = {{marginTop:'5%'}}>
            <Text style={{fontSize:15}}>Şube</Text>
            <View style = {{borderBottomWidth: 2, flexDirection: 'row', borderColor: '#ADADAD'}}>
                <Picker
                    style={{flex:1}} 
                    selectedValue={this.state.sube}
                    onValueChange={sube => this.setState({ sube })}>
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
            <View>
                {this.renderDeleteButton()}
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

const mapToStateProps = ({ studentUpdateResponse }) => {
    const { loadingUpdate, loadingDelete } = studentUpdateResponse;

    return {
        loadingUpdate,
        loadingDelete,
    };
};

export default connect(mapToStateProps, { studentChange, studentUpdate, studentDelete })(StudentUpdate);