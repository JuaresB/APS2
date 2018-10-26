import React, { Component } from 'react'
import { TextInput, KeyboardAvoidingView, StyleSheet, Text, View, Button } from 'react-native';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
        }
        this.SignIn = this.SignIn.bind(this)
        this.SignUp = this.SignUp.bind(this)
    }
    SignIn(){
        this.props.onSignIn()
    }
    SignUp(){
            this.props.onSignup()
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>  
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
                        secureTextEntry
                    />
                </View>
                
                <View style={styles.button}>
                    <Button title={"Entrar"} onPress={this.SignIn} color="#663399"/>
                </View>

                <View style={styles.button2}>
                    <Button title={"Sign Up"} onPress={this.SignUp} color="#663399"/>
                </View>
            </KeyboardAvoidingView> 
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 60, 
        marginBottom: 30,
        fontFamily: 'monospace',  
    },  
    container: {
      flex: 1,
      backgroundColor: '#77c9d4', 
      //backgroundColor: "#b0e0e6",
      alignItems: 'center', 
      justifyContent: 'center', 
      width: "100%",
      height: "100%",
    },
    text: {
      fontSize: 30,  
      marginBottom: 50, 
      color: "#808080", 
    },  
    button: {
    },
    button2: {
       position: 'absolute',
       bottom: 15,
       right: 15,  
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