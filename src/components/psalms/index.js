import React, { Component } from "react";
import {
  ScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import { getPsalms } from '../../actions/psalmsActions'

import ListData from './listData'
import Loader from '../shared/loader'

class Psalms extends React.Component {
  static navigationOptions = {
    title: 'Psalms',
  };

  componentDidMount(){
    this.props.getPsalms();
  }

  render(){
    return(
      <ScrollView>
        {this.props.psalms.length > 0 ? <ListData listData={this.props.psalms} navigation={this.props.navigation}/> : <Loader/>}
      </ScrollView>
    )
  }
}



function mapStateToProps(state) {
  return {
    psalms: state.psalms
  }
}

export default connect(mapStateToProps, {getPsalms})(Psalms)

