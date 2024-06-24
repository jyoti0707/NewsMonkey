import React, { Component, useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(false)
    const [page,setPage] = useState(1)
    const [nextDisable,setnextDisable] = useState(false)
    const [totalResults,settotalResults] = useState(0)

    

    const capitalizeFirstLetter=(string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const update= async() => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.api_key}&page=1&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30)
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

    const fetchMoreData = async() => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.api_key}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page+1)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)

      }

      useEffect(()=>{
        update()
      },[])
    

     const handleNextClick= async() =>{
        setPage(page+1)
        update()
        
    }

     const handlePrevClick= async()=>{
        setPage(page-1)
        update()
    }
    return (
      <div className="container my-3">
         
        <h1 className='text-center' style={{marginTop:"90px"}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
            
        <div className="row ">
            { articles.map((element)=>{
                return <div className="col-md-4 my-2" id={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url = {element.url} date = {element.publishedAt} author = {element.author} source = {element.source.name} />
                </div>
            })} </div>

        
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page==Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
        
        </InfiniteScroll>
      </div>
    )
  
}

export default News

 News.defaultProps = {
    country : "in",
    pageSize : 5,
}

News.propTypes = {
    country : PropTypes.string,
    pageSize: PropTypes.number,
}