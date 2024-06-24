import React, { Component } from 'react'

const NewsItem = (props)=> {
  
    let {title, description,date, imageUrl, url, author,source} = props
    return (
      <div>
        <div className="card my-5" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:1}}>
            {source}
          </span>
            <img className="card-img-top" style={{
            width: "100%",
            height: "200px"
        }} src={imageUrl?imageUrl:"https://static.vecteezy.com/system/resources/previews/000/197/882/original/vector-news-headlines-background-with-earth-planet.jpg"} alt="Card image cap"/>
            <div className="card-body my-5">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author?author : "Unknown"} on {new Date(date).toUTCString()}</small></p>
                <a href={url} target='_blank' className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  
}

export default NewsItem
