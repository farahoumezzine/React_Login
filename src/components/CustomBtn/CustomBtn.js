import React from 'react'
import {View, Text,TextInput, StyleSheet, Pressable} from 'react-native'

const CustomBtn =({onPress , text,type="Primary",bgColor, fgColor }) =>{
    return(
        <Pressable
         onPress={onPress} 
         style={[styles.container,
          styles[`container_${type}`],
          bgColor ? {backgroundColor : bgColor} : {}, ]} >
            <Text style={[styles.text,
                 styles[`text_${type}`],
                 fgColor ? {color : fgColor} : {}, ]} >
             {text}
             
             </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container:{
        width: '90%',
        padding: 15,
        marginVertical: 5,
        alignItems:'center',
        borderRadius:10,
    },

    container_Primary:{
        backgroundColor:'#19A7CE',

    },

    container_TERTIARY:{
        
        backgroundColor:'#F8F6F4',


    }, 

    

    text:{
        fontWeight:'bold',
        color:'white',

    },
    
    text_TERTIARY:{
        color: 'gray',
    },
});

export default CustomBtn;