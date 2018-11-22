import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput, StyleSheet, Text, View, Button } from 'react-native';

export default class Navigation extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchInput: "",
    }
  }

  render(){
    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.title}>Wandy</Text>
        <Text style={styles.text}>Para onde quer ir?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.input}
            onChangeText={(searchInput) => {
              this.setState({searchInput})
              console.log(searchInput)
            }}
            value={this.state.searchInput}
            placeholder="Instituto Militar de Engenharia"
          />
        </View>
        <View style={styles.button}>
          <Button title={"Navegar"} onPress={() => {this.props.onLocationChoice()}} color="#663399"/>
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
