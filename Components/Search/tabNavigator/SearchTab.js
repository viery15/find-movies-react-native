import React, { Component } from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  Keyboard
} from 'react-native'
import axios from 'axios'

import { Container, Content } from 'native-base'
import SearchHeader from '../SearchHeader'

class SearchTab extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    searchMovies: '',
    movieData: {},
    movieFound: false
  }

  movieSearch = () => {
    Keyboard.dismiss()
    const movieTitle = this.state.searchMovies.toLowerCase()

    const query = 'http://www.omdbapi.com/?apikey=fc069683&t='+movieTitle

    axios.get(query)
        .then((response) => {
          var data = response.data
          console.log(data)
          if (data) {
            this.setState({
              movieData: data,
              movieFound:true
            })
          }
          else {
            movieFound:false
          }
        }).catch((error) => {
          this.setState({
            movieFound:false
          })
        })
  }

  renderContent = () =>{
    if(this.state.movieFound) {
      return <View><Text style={{fontSize: 50}}>{this.state.movieData.Title}</Text><Image
          style={{width: 200, height: 300}}
          source={{uri: this.state.movieData.Poster}}
        /><Text>{this.state.movieData.Genre}</Text><Text>{this.state.movieData.Plot}</Text></View>
      // return <SearchBody movieData={this.state.movieData}/>
    }
    else {
      console.log("Movie not Found")
    }
  }

  render() {
    return (
      <Container>
        <SearchHeader
          value={this.state.searchMovies}
          onChangeText={(searchMovies) => this.setState({searchMovies})}
          movieSearch={this.movieSearch}
        />
        <Content>
          {this.renderContent()}
        </Content>
      </Container>
    )
  }
}

export default SearchTab
