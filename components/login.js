import React, { Component } from 'react'
import { TextInput, Alert, StyleSheet, Text, View, Button } from 'react-native';
import Auth0 from 'react-native-auth0';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: ""
        }
        this.SignIn = this.SignIn.bind(this)
    }
    SignIn(){
    }
    render() {
        return (
            <View>  
                <Text style={styles.text}>Insira seu e-mail</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => {
                        this.setState({text})
                        console.log(text)
                    }}
                    value={this.state.text}
                />
                <Button style={styles.button} title={"Ir tela 2!"} onPress={this.SignIn}/>
                
            </View>
        )
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