import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <LinearGradient 
      colors={['#2ED6D7', '#3CA9F6', '#833CF6', '#EB3CF6']}
      style={styles.LinearGradientStyle}  
      start={{x: 0, y: 1}} 
      end={{x: 1, y: 0}}
      locations={[0, 0.2, 0.4, 0.9]} >
        <Text style={textStyle}> {children} </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color : '#fff',
    },
    LinearGradientStyle: {
      height: 50,
      justifyContent: 'center',
      borderRadius:25,
    },
    buttonStyle: {
      marginTop:'10%'
    }
};

export default Button;