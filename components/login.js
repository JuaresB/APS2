import React, { Component } from 'react'
import { TextInput, Alert, StyleSheet, Text, View, Button } from 'react-native';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
        }
        this.SignIn = this.SignIn.bind(this)
    }
    SignIn(){
        this.props.onSignIn()
    }
    render() {
        return (
            <View style={styles.container}>  
                <Text style={styles.title}>Wandy</Text>
                <Text style={styles.text}>Bem-vindo!</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.input} 
                        onChangeText={(email) => {
                            this.setState({email})
                            console.log(email)
                        }}
                        value={this.state.email}
                        placeholder="E-mail"
                    />
                </View> 
                <View style={styles.inputContainer}>
                    <TextInput 
                        underlineColorAndroid={'transparent'}
                        style={styles.input}
                        onChangeText={(password) => {
                            this.setState({password})
                            console.log(password) 
                        }}
                        value={this.state.password}
                        placeholder="Senha" 
                    />
                </View>
                
                <View style={styles.button}>
                    <Button title={"Entrar"} onPress={this.SignIn} color="#57bc90"/>
                </View>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        marginBottom: 30, 
    },
    container: {
      flex: 1,
      backgroundColor: '#77c9d4',
      alignItems: 'center', 
      justifyContent: 'center', 
      width: "100%",
      height: "100%",
    },
    text: {
      fontSize: 30,
      marginBottom: 50, 
    },
    button: {
    },
    input: { 
        width: '100%',
        padding: 10  
    },
    inputContainer: {
        height: 40,
        width: "60%",
        backgroundColor: '#fff', 
        marginBottom: 20, 
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
         
    }
  });