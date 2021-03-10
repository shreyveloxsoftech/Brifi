import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/common/AppButton'

export default class App extends React.Component {
   state = {
      myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod'
   }
   updateState = () => {
      this.setState({ myState: 'The state is updated' })
   }
   render() {
      return (
         <View>
            <AppButton myState = {this.state.myState} updateState = {this.updateState}/>
         </View>
      );
   }
}