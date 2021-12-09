import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={
                styles.title
            }>Settings</Text>
            <View style={{"alignItems":"","":"",}}>
            <button style={{"width":"100px","height":"100px",}}>Contact us</button>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    "border-bottom": "10px solid #eb9486",
    "border-top": "10px solid #eb9486",
    "height": "100%",
    "width": "100%",
    // backgroundColor: '#d7d9b1',
    backgroundColor: '#d7d9b1',

    // "background-color":"#d7d9b1",
    display: "flex",
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    "align-items": "center",
    textAlign: 'center'
}, title: {
  position: "absolute",
  fontSize: "10vw",
  top: "15px",
  display: "flex",
},
});
