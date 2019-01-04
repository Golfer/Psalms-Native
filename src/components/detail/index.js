import React, { Component } from "react";
import {
  ScrollView,
  TouchableWithoutFeedback,
  Linking,
  StyleSheet
} from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import {ListItem} from "react-native-elements";


class Detail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('psalmTitle', 'Detail'),
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
         <FontAwesome5Icon
           name='home'
           onPress={()=> navigation.goBack()}
           size={30}
           color='#000'
           style={styles.homeButton}
         />
      )
    };
  }

  __OnPress(link_url){
    let uri = link_url
    if (uri === ''){
      return console.log(uri === '', 'LInk is Blank!');
    } else {
      console.log(uri === '', `Isn't Blank!`);
      return Linking.canOpenURL(uri).then(supported => {
        if (!supported) {
          console.log('Can\'t handle url: ' + uri);
        } else {
          Linking.openURL(uri);
        }
      }).catch(err => console.error('An error occurred', err));

    }
  }

  _renderListData(){
    let psalms = this.props.navigation.state.params.psalmItem.psalms

    return psalms.map((item, key) => (
      <TouchableWithoutFeedback key={key} >
        <ListItem
          key={item.id}
          title={item.name}
          subtitle={`Позиція: ${item.position_old != null ? item.position_old : ''} (${item.position_new}); ${item.link_url}`}
          titleNumberOfLines={0}
          subtitleNumberOfLines={0}
          containerStyle={{
            borderColor: "#D3D5D8",
            borderBottomWidth: 1,
            marginTop: 1
          }}
          onPress={() => this.__OnPress(item.link_url)}
        />
      </TouchableWithoutFeedback>
    ));

  }
  render(){
    return(
      <ScrollView>{this._renderListData()}</ScrollView>
    )
  }
}
export default Detail



const styles = StyleSheet.create({
  homeButton: {
    marginRight: 15
  },

})