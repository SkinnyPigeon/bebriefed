import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import PropTypes from 'prop-types'
import StatusIndicator from './StatusIndicator'

export default class StatusScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusIndicator isUp={this.props.isUp}/>
        <Text style={styles.statusText}>Service Up</Text>
      </View>
    )
  }
}

StatusScreen.propTypes = {
  isUp: PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 30,
  },
})