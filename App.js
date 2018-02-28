import React, { Component } from 'react'
import {
  
} from 'react-native'

import MainContainer from './components/MainContainer'

const isUp = true

export default class App extends Component<Props> {
  render() {
    return (
      <MainContainer isUp={isUp}/>
    )
  }
}

