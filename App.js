import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import Login from './components/login'
import Signup from './components/signup'
 
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tela: "tela1",
    };
    this._onPressButton = this._onPressButton.bind(this)
    this._onPressButton2 = this._onPressButton2.bind(this)
  }
  _onPressButton() {
    //Alert.alert('Só a tora revigora :D');
    this.setState({
      tela: "tela2",
    });
  }
  _onPressButton2() {
    this.setState({
      tela: "tela1" 
    });
  }
  
  render() { 
    return (
      <View style={styles.container}>
        {this.state.tela === "tela1" &&
          <Login onSignIn={this._onPressButton} /> 
        }
        {this.state.tela === "tela2" &&
        <Signup onSignup={this._onPressButton2}/>
        } 
      </View> 
    );  
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  text: {
    fontSize: 30,
    marginBottom: 40,
  },
});
