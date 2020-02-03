import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import SignUp_FTG from '../components/SignUp_FTG';
import Button from '../components/Button';
import Spinner from '../components/Spinner';

class LoginForm extends Component {

  signUp(){
    Actions.registerForm();
  }

  clickLogin(){
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton(){
    if(!this.props.loading) {
      return <Button onPress={this.clickLogin.bind(this)}> GİRİŞ YAP </Button>;
    }
    return <Spinner size="small" />;
  }

  render() {
    console.log('email: '+this.props.email);
    console.log('şifre: '+this.props.password);
    return (
      <ScrollView style={{flex:1}}>
        <View style= {styles.textView}>
          <Text style={{fontSize:25, fontWeight:'bold',}} >Giriş Yap</Text>
        </View>
        <View style = {styles.loginView}>
          <View>
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
          <Text style={{ color: '#707480'}}>Henüz hesabınız yok mu? </Text>
          <TouchableOpacity 
          style={styles.signUpView}
          onPress={() => this.signUp()} 
          >
            <Text style={{ color: '#3CA9F6'}}> KAYDOL</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ authenticationLoginResponse }) => {
  const { email, password, loading } = authenticationLoginResponse;
  return {
    email: 'dilekant19@gmail.com',
    password: 'dilek2015',
    loading
  };
};

const styles = StyleSheet.create({
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

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);