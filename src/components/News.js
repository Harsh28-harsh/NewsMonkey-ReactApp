import React, { useEffect , useState } from "react";
import NewsItem from "./Newsitem";
import Spinner, { spinner } from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  
 
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  const updateNews=  async ()=>{
    document.body.style.backgroundColor = "lavender";
    props.setProgress(10)
     console.log(props.apiKey)
    const url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parsedata = await data.json();
    props.setProgress(70)
    setArticles(parsedata.articles)
    settotalResults(parsedata.totalResults)
    setLoading(false)
    
    props.setProgress(100)
  }
  useEffect(() => {
     document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  },[])
  
  // async componentDidMount() {
  //   // document.body.style.backgroundColor = "lavender"
  //   // const url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=82a35fe0c84d460b959a4ea707a39c41&page=${this.state.page}&pageSize=${props.pageSize}`
  //   // this.setState({loading: true})
  //   // let data = await fetch(url)
  //   // let parsedata = await data.json()
  //   // console.log(parsedata)
  //   // this.setState({
  //   //   articles: parsedata.articles || [],
  //   //   totalResults: parsedata.totalResults,
  //   //   loading: false
  //   //  })
  // }
  const hanldePreviousClick = async () => {
    //   console.log("previous")
    //   let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=82a35fe0c84d460b959a4ea707a39c41&page=${this.state.page - 1}&pageSize=${props.pageSize}`
    //   let data = await fetch(url)
    //   let parsedata = await data.json()
    //   console.log(parsedata)

    //  this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedata.articles || []
    //  })
    setpage(page - 1 )
      updateNews();
  
  };

  const hanldeNextClick = async () => {
    // console.log("next")
    // if(!(this.state.page + 1 >Math.ceil(this.state.totalResults/props.pageSize))){
    //   let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=82a35fe0c84d460b959a4ea707a39c41&page=${this.state.page + 1}&pageSize=${props.pageSize}`
    //   this.setState({loading: true})
    //   let data = await fetch(url)
    //   let parsedata = await data.json()
    //   this.setState({loading: false})

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedata.articles || [],
    //     loading: false
    //   })
    // }
    setpage(page + 1  )
      updateNews();
   
  };
  const fetchMoreData = async () => {
    const nextPage = page + 1;
 setpage(page + 1  )
    document.body.style.backgroundColor = "lavender";
    const url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(articles.concat(parsedata.articles))
    settotalResults(parsedata.totalResults)
   
  };

  
    console.log("render");
    return (
      <>
        <h1 className="text-center" style={{margin: '35px 0px ' , marginTop: '110px'}}>
          NewsMonkey - Top {capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          endMessage={
            <h4 className="text-center my-4">
              This is the end, hold your breath and count to 10 🎵
            </h4>
          }
          loader={<Spinner />}
        >
          <div className="container">

          
          <div className="container">
            <div className="row">
              {articles
                .filter((element) => element)
                .map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 45) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }
                        imageurl={element.urlToImage}
                        url={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source?.name || "Unknown"}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.hanldePreviousClick}
          >
            Previous &larr;
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.hanldeNextClick}
          >
            Next &rarr;{" "}
          </button>
        </div> */}
     </>
    );
  
}
  News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
export default News;
