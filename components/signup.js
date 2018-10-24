import React, { Component } from 'react'
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';

export default class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
        }
        this.Signup = this.Signup.bind(this)
    }
    Signup(){
        this.props.onSignup()
    }
    render() {
        return (
            <View style={styles.container}>  
                <Text style={styles.text}>Cadastro</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.input} 
                        onChangeText={(name) => {
                            this.setState({name})
                            console.log(name)
                        }}
                        value={this.state.name}
                        placeholder="Nome"
                    />
                </View> 
                <View style={styles.inputContainer}>
                    <TextInput 
                        underlineColorAndroid={'transparent'}
                        style={styles.input}
                        onChangeText={(email) => {
                            this.setState({email})
                            console.log(email) 
                        }}
                        value={this.state.email}
                        placeholder="Email"
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
                    <Button title={"Entrar"} onPress={this.Signup} color="#57bc90"/>
                </View>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
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
      marginBottom: 40,
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