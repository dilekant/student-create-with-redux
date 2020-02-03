import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { usernameChanged, emailChanged, passwordChanged, createUser, creaateFail } from '../actions';
import SignUp_FTG from '../components/SignUp_FTG';
import Button from '../components/Button';
import Spinner from '../components/Spinner';


class RegisterForm extends Component {
  state = {
    email: '',
    password: '',
    username: '',
  };

  clickCreate(){
    const { username, email, password } = this.props;
    this.props.createUser({ username, email, password });
  }

  login(){
    Actions.loginForm();
  }

  renderButton(){
    if(!this.props.loading) {
      return <Button onPress={this.clickCreate.bind(this)}> KAYIT OL </Button>;
    }
    return <Spinner size="small" />;
  }

  render() {
    console.log('username: '+this.props.username);
    console.log('email: '+this.props.email);
    console.log('password: '+this.props.password);
    return (
      <ScrollView style={{flex:1}}>
        <View style= {styles.textView}>
          <Text style={{fontSize:25, fontWeight:'bold',}} >Kayıt Ol</Text>
        </View>
        <View style = {styles.loginView}>
        <View>
            <Text style={{fontSize:15}}>Kullanıcı Adı</Text>
            <View style={styles.textInputView}>
              <View style={styles.imageStyleView}>
                <Image 
                style={styles.imageStyle} 
                source={require('../../assets/icons/user.png')} 
                />
              </View>
              <TextInput
                style={styles.textInputStyles}
                placeholder="Kullanıcı Adınızı Giriniz"
                value={this.props.username}
                onChangeText={username => this.props.usernameChanged(username)}
                placeholderTextColor='#CBCBCB'
              />
            </View>
          </View>
          <View style = {{marginTop:'5%'}}>
            <Text style={{fontSize:15}}>Email</Text>
            <View style={styles.textInputView}>
              <View style={styles.imageStyleView}>
                <Image 
                style={styles.imageStyle} 
                source={require('../../assets/icons/email.png')} 
                />
              </View>
              <TextInput
                style={styles.textInputStyles}
                placeholder="Emailinizi giriniz"
                value={this.props.email}
                onChangeText={email => this.props.emailChanged(email)}
                placeholderTextColor='#CBCBCB'
              />
            </View>
          </View>
          <View style = {{marginTop:'5%'}}>
            <Text style={{fontSize:15}}>Şifre</Text>
            <View style={styles.textInputView}>
              <View style={styles.imageStyleView}>
                <Image 
                style={styles.imageStyle} 
                source={require('../../assets/icons/lock.png')} 
                />
              </View>
              <TextInput
                style={styles.textInputStyles}
                placeholder="Şifrenizi giriniz"
                value={this.props.password}
                onChangeText={password => this.props.passwordChanged(password)}
                placeholderTextColor='#CBCBCB'
                secureTextEntry
              />
            </View>
          </View>
          <View>
            {this.renderButton()}
          </View>

          <SignUp_FTG/>
        </View>
        <View style={styles.bottomView}>
          <Text style={{ color: '#707480'}}>Zaten hesabın var mı? </Text>
          <TouchableOpacity 
          style={styles.loginTextView} 
          onPress={() => this.login()} 
          >
            <Text style={{ color: '#3CA9F6'}}> GİRİŞ YAP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ authenticationCreateResponse }) => {
  const { username, email, password, loading } = authenticationCreateResponse;
  return {
    username,
    email,
    password,
    loading
  };
};

const styles = StyleSheet.create({
  textView: {
    marginTop:30, 
    alignItems:'center', 
    justifyContent:'center'
  },
  loginView: {
    marginTop:30, 
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
    width: '90%',
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
  bottomView: {
    marginTop:60, 
    height:20, 
    justifyContent:'center', 
    flexDirection:'row'
  },
  loginTextView: {
    borderBottomColor:'#3CA9F6', 
    borderBottomWidth:2
  },

});

export default connect(mapStateToProps, { usernameChanged, emailChanged, passwordChanged, createUser, creaateFail })(RegisterForm);