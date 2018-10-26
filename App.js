import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import Login from './components/login'
import Signup from './components/signup'
import Navigation from './components/navigation'
 
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tela: "signin",
    };
    this.onSignup = this.onSignup.bind(this)
    this.onSignIn = this.onSignIn.bind(this)
    this.onSendSignupForm = this.onSendSignupForm.bind(this)
  }
  onSignup() {
    this.setState({
      tela: "signup",
    });
  }
  onSignIn() {
    this.setState({
      tela: "navigation" 
    });
  }
  onSendSignupForm() {
    this.setState({
      tela: "signin"  
    });
  }
  
  render() { 
    return (
      <View style={styles.container}>
        {this.state.tela === "signin" &&
          <Login onSignIn={this.onSignIn} onSignup={this.onSignup}/> 
        }
        {this.state.tela === "signup" &&
          <Signup onSignup={this.onSendSignupForm}/>
        } 
        {this.state.tela === "navigation" &&
          <Navigation />
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
