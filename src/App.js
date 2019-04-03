import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FilmList, FilmDetails } from './components'

class App extends Component {
  render() {
    return (
      <Router>
        <section className="section hero is-primary">
          <div className="container">
            <h1 className="title">
              <Link to="/">Ghibli</Link>
            </h1>
          </div>
        </section>
        <Switch>
          <Route path="/films/:id" component={FilmDetails} />
          <Route path="/" component={FilmList} />
        </Switch>
      </Router>
    )
  }
}

export default App
