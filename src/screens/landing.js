import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/common/AppButton'

export default class App extends React.Component {
   state = {
        title1: 'Brifi',
        title2: 'Enably',
   }

   render() {
      return (
         <View style={StyleSheet.container}>
            <AppButton myState = {this.state.title1} onPress={console.log('Pressed')} />
            <AppButton myState = {this.state.title2}/>
         </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    }
})