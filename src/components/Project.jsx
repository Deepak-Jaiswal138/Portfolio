import React from 'react'

const Project = (props) => {
    return (
        <div className="col-md-4 col-sm-6 my-4 text-primary">
          <div className="card">
            <img
              src={props.img}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.card_title}</h5>
              <p className="card-text">
              {props.card_summary}
              </p>
              <a href={props.card_link} className="btn btn-primary">
                 See Project
              </a>
            </div>
          </div>
        </div>
    )
}

export default Project
