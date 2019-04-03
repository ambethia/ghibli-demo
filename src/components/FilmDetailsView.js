import React from 'react'

export const FilmDetailsView = props => (
  <section className="section">
    <div className="container">
      <div className="level">
        <div className="level-left">
          <h2 className="title is-2 level-item">{props.title}</h2>
        </div>
        <div className="level-right">
          <h2 className="title is-4 level-item">{props.release_date}</h2>
        </div>
      </div>
      <div className="content">
        <p>{props.description}</p>
      </div>
    </div>
  </section>
)
