import React from 'react'
import { Link } from 'react-router-dom'

export const FilmListView = props => (
  <section className="section">
    <div className="container">
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {props.films.map(film => (
            <tr key={film.id}>
              <td>
                <Link to={`/films/${film.id}`}>{film.title}</Link>
              </td>
              <td>{film.release_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
)
