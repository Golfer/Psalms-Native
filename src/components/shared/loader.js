import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Spinner from 'react-native-spinkit'
class Loader extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      isVisible: true,
      size: 300,
      index: 7,
      types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
      color: "#303030",
    };
  }

  render() {
    let type = this.state.types[this.state.index]
    return (
      <View>
        <TouchableOpacity activeOpacity={0.4} style={styles.container}><Spinner style={styles.spinner} isVisible={this.state.isVisible} size={this.state.size} type={type} color={this.state.color}/></TouchableOpacity>
      </View>
    )
  }
}

export default Loader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  spinner: {
    marginBottom: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
});