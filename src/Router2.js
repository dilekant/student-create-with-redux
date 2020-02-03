import React, { Component } from 'react';
import firebase from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './screen/LoginForm';
import RegisterForm from './screen/RegisterForm';
import StudentList from './screen/StudentList';
import StudentCreate from './screen/StudentCreate';
import StudentUpdate from './screen/StudentUpdate';

class RouterComponent extends Component {

  clickLogout(){
    firebase.auth().signOut();
  }

  render() {
    return (
      <Router>
        <Scene key='kimlik'>
            <Scene 
            key='studentList'
            onRight = {() => Actions.studentCreate()}
            onLeft = {() => this.clickLogout()}
            rightButtonImage ={require('../assets/icons/add.png')}
            leftButtonImage = {require('../assets/icons/close.png')}
            leftButtonIconStyle={{borderWidth:3, height:20, width:20}}
            component={StudentList} 
            title='Öğrenci Listesi'
            />
            <Scene key='loginForm' component={LoginForm} title='Giriş Yap' hideNavBar={true} />
            <Scene key='registerForm' component={RegisterForm} title='Kayıt Ol' hideNavBar={true} />
            <Scene key='studentCreate' component={StudentCreate} title='Öğrenci Kaydet' />
            <Scene key='studentUpdate' component={StudentUpdate} title='Öğrenci Güncelle' />
        </Scene>
      </Router>
    );
  }
};

export default RouterComponent;