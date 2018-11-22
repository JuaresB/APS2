import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import Login from './components/login'
import Signup from './components/signup'
import Navigation from './components/navigation'
import DestinantionChoice from './components/destinationChoice'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tela: "signin",
    };
    this.onSignup = this.onSignup.bind(this)
    this.onSignIn = this.onSignIn.bind(this)
    this.onSendSignupForm = this.onSendSignupForm.bind(this)
    this.onLocationChoice = this.onLocationChoice.bind(this)
  }
  onSignup() {
    this.setState({
      tela: "signup",
    });
  }
  onSignIn() {
    this.setState({
      tela: "destinationChoice"
    });
  }
  onSendSignupForm() {
    this.setState({
      tela: "signin"
    });
  }
  onLocationChoice(){
    this.setState({
      tela: "navigation"
    })
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
        {this.state.tela === "destinationChoice" &&
          <DestinantionChoice onLocationChoice={this.onLocationChoice}/>
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
