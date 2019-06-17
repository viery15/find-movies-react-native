import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet
} from "react-native"

class SearchBody extends Component {
  render(){
    return(
      <View><Text>{this.state.movieData.Title}</Text><Image
          style={{width: 200, height: 300}}
          source={{uri: this.state.movieData.Poster}}
        /><Text>{this.state.movieData.Genre}</Text></View>
    )
  }
}

export default SearchBody
