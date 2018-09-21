import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('Só a tora revigora :D')
  }
  render() { 
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bem-Vindo ao ####</Text>
        <Button style={styles.button} title={"Navegar!"} onPress={this._onPressButton}/>
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
