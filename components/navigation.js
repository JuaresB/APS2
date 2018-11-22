import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';
import flagBlueImg from './assets/flag-blue.png';

export default class Navigation extends Component {
  constructor(props){
    super(props)
    this.state = {
      region: null,
      searchInput: "",
      errorMessage: null,
    }
    this.onRegionChange = this.onRegionChange.bind(this)
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let region = await Location.getCurrentPositionAsync({});
    this.setState({ region: {
      latitude: region.coords.latitude,
      longitude: region.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    } });
    console.log(region, region.coords.latitude)
  };

  onRegionChange(region) {
    this.setState({ region });
  }

  render(){
    return(
      <View style={styles.container}>
          {!this.state.region && <Text>Carregando rota...</Text>}
          {this.state.region &&
          <View style={styles.container}>
            <MapView
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
              region={this.state.region}
              onRegionChangeComplete={this.onRegionChange}
            />
            {/* <Image source={require('./assets/flag-blue.png')} style={{width: 30, height: 30}} /> */}
          </View>
          }
      </View>
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
