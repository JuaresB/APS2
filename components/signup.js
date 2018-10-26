import React, { Component } from 'react'
import { TextInput, KeyboardAvoidingView,StyleSheet, Text, View, Button } from 'react-native';

export default class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            isChecked:false,
            error: false,
            errorMessage: ""
        }
        console.log(this.state)
        this.Signup = this.Signup.bind(this)
    }
    Signup(){
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailRegex.test(String(this.state.email).toLowerCase())){
            console.log("Email inválido.")
            this.setState({
                error: true,
                errorMessage: "Email inválido."
            })
        } else if(this.state.name.length < 3) {
            console.log("Email inválido.")
            this.setState({
                error: true,
                errorMessage: "Nome inválido."
            })
        } else if(this.state.password.length < 6) {
            console.log("Email inválido.")
            this.setState({
                error: true,
                errorMessage: "Senha inválida."
            })
        } else {
            const query = `mutation {
                createUser(input: {
                    name: "${this.state.name}",
                    email: "${this.state.email}",
                    password: "${this.state.password}"
                })
            }`
            console.log(query)
            console.log(this.state) 
            fetch('http://192.168.0.10:4000/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: query }),
            })
            .then(res => {
                console.log(res, res.status)
                if(res.status === "200") console.log("OK!")
                res.json()
            }) 
            .then(res => {
                console.log(res)
                //this.props.onSignup()
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    error: true,
                    errorMessage: err
                })
            })
        }
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>  
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
                        secureTextEntry
                    />
                </View>  
                <View style={styles.button}>
                    <Button title={"Entrar"} onPress={this.Signup} color="#663399"/>
                </View>
            </KeyboardAvoidingView> 
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
      fontSize: 40,
      marginBottom: 40,
      fontFamily: 'monospace',
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