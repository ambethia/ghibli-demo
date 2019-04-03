import React, { Component } from 'react'
import { get } from '../utils'
import { Loading } from './Loading'
import { FilmListView } from './FilmListView'

export class FilmList extends Component {
  state = {
    films: [],
    loaded: false
  }

  componentDidMount() {
    get('/films').then(films => {
      this.setState({ films, loaded: true })
    })
  }

  render() {
    if (this.state.loaded) {
      return <FilmListView films={this.state.films} />
    } else {
      return <Loading />
    }
  }
}
