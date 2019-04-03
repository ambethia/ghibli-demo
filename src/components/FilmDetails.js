import React, { Component } from 'react'
import { get } from '../utils'
import { Loading } from './Loading'
import { FilmDetailsView } from './FilmDetailsView'

export class FilmDetails extends Component {
  state = {
    film: {},
    loaded: false
  }

  componentDidMount() {
    const id = this.props.match.params.id
    get(`/films/${id}`).then(film => {
      this.setState({ film, loaded: true })
    })
  }

  render() {
    if (this.state.loaded) {
      return <FilmDetailsView {...this.state.film} />
    } else {
      return <Loading />
    }
  }
}
