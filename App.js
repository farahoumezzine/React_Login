import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  return (
    
      <SafeAreaView style={styles.root}> 
     <LoginScreen />
     </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  root : {
    flex: 1 ,
    backgroundColor: '#F9FBFC'
  },
 
});
