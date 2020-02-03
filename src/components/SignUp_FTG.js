import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class SignUp_FTG extends Component {
  render() {
    return (
        <View style={styles.topView}>
            <Text style={{color:'#707480'}}>veya kullanarak kaydolun</Text>
            <View style={styles.signUpView}>
                <TouchableOpacity style={styles.facebookView} >
                    <Image 
                    style={{width:20, height:20}} 
                    source={require('../../assets/icons/facebook.png')} 
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.twitterView} >
                    <Image 
                    style={{width:20, height:20}} 
                    source={require('../../assets/icons/twitter.png')} 
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.googleView} >
                    <Image 
                    style={{width:25, height:25}} 
                    source={require('../../assets/icons/google.png')} 
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    topView: {
        flexDirection: 'column', 
        alignItems: 'center', 
        marginTop: '10%'
    },
    signUpView: {
        flexDirection: 'row', 
        marginTop: '5%', 
        width:140,
    },
    facebookView: {
        backgroundColor:'#4267B2', 
        height:40, 
        width:40, 
        borderRadius:20, 
        justifyContent: 'center', 
        alignItems:'center'
    },
    twitterView: {
        backgroundColor:'#03A9F4', 
        marginLeft:10, 
        height:40, 
        width:40, 
        borderRadius:20, 
        justifyContent: 'center', 
        alignItems:'center'
    },
    googleView: {
        backgroundColor:'#E74C3C', 
        marginLeft:10, 
        height:40, 
        width:40, 
        borderRadius:20, 
        justifyContent: 'center', 
        alignItems:'center',
    },
});