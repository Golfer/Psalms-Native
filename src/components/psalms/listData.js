import React, {Component} from 'react';
import { ScrollView, TouchableWithoutFeedback } from 'react-native'
import { ListItem } from 'react-native-elements'

class ListData extends Component {

  _renderListData(){
    let listData = this.props.listData
    return listData.map((item, key) => (
      <TouchableWithoutFeedback key={key} onPress={() => this.props.navigation.navigate('ScreenDetail', {psalmItem: item, psalmTitle: item.name_ua})}>
        <ListItem
          key={item.id}
          title={item.name_ua}
          titleNumberOfLines={0}
          containerStyle={{
            borderColor: "#D3D5D8",
            borderBottomWidth: 1,
            marginTop: 1
          }}
          badge={{ value: item.psalms.length, textStyle: { color: '#D3D5D8' }, containerStyle: { marginTop: 2 } }}
        />
      </TouchableWithoutFeedback>
    ));
  }

  render(){
    return(
      <ScrollView>{this._renderListData()}</ScrollView>
    );

  }
}

export default ListData