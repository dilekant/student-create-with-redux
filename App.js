import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Spinner from './src/components/Spinner';
import Router from './src/Router';
import Router2 from './src/Router2';


export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount(){
    try {
      firebase.initializeApp({
        apiKey: "AIzaSyCTiRyprRPOmYXRBco7rBX2SjXluFQN6n0",
        authDomain: "telefonrehberi-c34cf.firebaseapp.com",
        databaseURL: "https://telefonrehberi-c34cf.firebaseio.com",
        projectId: "telefonrehberi-c34cf",
        storageBucket: "telefonrehberi-c34cf.appspot.com",
        messagingSenderId: "27787570842",
        appId: "1:27787570842:web:dfae6a534e646840203923",
        measurementId: "G-HYCPTQFPB7"
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
      
    } catch (err) {
      if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error raised', err.stack)
    }}
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Router2 />
      );
      case false:
        return (
          <Router />
      );
      default:
       return (
         <View>
          <Spinner size="large" />
         </View>
       );

    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store} >
        {this.renderContent()}
      </Provider>
    );
  }
}
