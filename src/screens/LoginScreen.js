import React, {useState} from "react";
import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import logo from '../assets/logoapp1.png';
import CustomInpt from "../components/CustomInput/CustomInput";
import CustomBtn from "../components/CustomBtn/CustomBtn";


const LoginScreen = () => {
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');

  const { height } = useWindowDimensions();

  const onLoginPressed = () =>{
    console.warn("Sign in");
  };
  const onForgetPasswordPressed = () =>{
    console.warn("Forget Password Pressed");
  };
  const onSignInFbPressed = () =>{
    console.warn("on Sign In Facebook Pressed");
  };
  const onSignInGooglPressed = () =>{
    console.warn("on Sign In Google Pressed");
  };
  const onSignUpPressed = () =>{
    console.warn("on Sign Up Pressed");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      <CustomInpt 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}/>
      <CustomInpt 
      placeholder="Password" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry={true}/>

    <CustomBtn 
    text="Sign In" 
    onPress={onLoginPressed}
    type ="Primary"

    />

    <CustomBtn 
    text="Forget Password ?" 
    onPress={onForgetPasswordPressed}
    type ="TERTIARY"
    />


  <CustomBtn 
    text="Sign In with Facebook" 
    onPress={onSignInFbPressed}
    bgColor="#E7EAF4"
    fgColor="#4765A9"
    />
    <CustomBtn 
    text="Sign In with Google" 
    onPress={onSignInGooglPressed}
    bgColor="#FAE9EA"
    fgColor="#DD4D44"
    />

  <CustomBtn 
    text="Don't have an account? Create one" 
    onPress={onSignUpPressed}
    type ="TERTIARY"
    />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
    
    padding: 10,
  },
 
  logo: {
    width: 300,
    height: 300,
    maxWidth: '80%',
    maxHeight: '40%',
  

  },
});

export default LoginScreen;