import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { Header, Item, Icon, Input } from 'native-base'

class SearchHeader extends Component {
  render() {
    return (
      <Header
        style={{ height:80 }}
        searchBar
        rounded
      >
        <Item>
          <Icon name="search"/>
          <Input
            placeholder="Enter movie title"
            onChangeText={this.props.onChangeText}
            returKeyType="search"
            onSubmitEditing = {this.props.movieSearch}
          />
        </Item>
      </Header>
    )
  }
}

export default SearchHeader
