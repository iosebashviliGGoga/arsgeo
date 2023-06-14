import React , {useState , useEffect, useContext}from 'react'
import { Link , useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { motion } from 'framer-motion'
import { articles } from './DataArrays/Articles'
import { SearchContext } from './Contexts/Context'

import { FaArrowLeft, FaSearch , FaArrowRight } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'
import HeaderBottom from './HeaderBottom'


function News() {

  const {language} = useContext(SearchContext)
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [news, setNews] = useState([])
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
          if(search){
            navigate(`/search/${search}`)
          }
         
        }
       }
     //pagination 
     const [article , setArticle] = useState(articles)
     const [pageNumber, setPageNumber] = useState(0);
     const usersPerPage = 4;
     const pagesVisited = pageNumber * usersPerPage;
     const pageCount = Math.ceil(news.length / usersPerPage);
     const pageChange = ({selected}) => {
     setPageNumber(selected)
     }

    
     const productsList = news ?  news.slice(pagesVisited, pagesVisited + usersPerPage).map((product,index)=>{

        return  <>
                   <div className="landing-top-card" key={product.text}>
                        <img src={`https://new.georgianart.ge/${product.geo.img}`} alt="" />
                        <div className="landing-top-card-text-container">
                            <span>{language ? product.geo.title : product.eng.title}</span>
                            <span>{language ? product.geo.author : product.eng.author}</span>
                            <span>გიორგი ჩუბინაშვილის სახელობის ქართული ხელოვნების ისტორიისა და ძეგლთა დაცვის ეროვნული კვლევითი ცენტრი</span>
                            <Link to={`/news/${product.geo.rec_id}`}>
                                <button>{language ? "ვრცლად" :  "IN DETAIL"}</button>
                                </Link>
                        </div>
                    </div>
               
                </>
    
      }) : "loading"



      
      useEffect(()=>{
        fetch('https://new.georgianart.ge/api/news.php?news=all')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setNews(data);
        })
        .catch((err) => {
           console.log(err.message);
        });


      },[])










  return (
    <motion.div  
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 0.5}}
    exit={{opacity: 0}}>
        <HeaderBottom/>
        <div className="articles-container margin-10 news">
            
        <header>
            
            <div className="hanging-text">
                  <span className="underline">{language ? "სიახლეები"  :  "NEWS"}</span>
                  <Helmet><title>{language ? "სიახლეები"  :  "NEWS"}</title></Helmet>
            </div>
        </header>
        <div className="article-array">
        {productsList}
        <div className="pagination">
       
      <ReactPaginate 
       previousLabel = {<FaArrowLeft/>}
       nextLabel = {<FaArrowRight/>}
      pageCount = {pageCount}
      onPageChange = {pageChange}
      containerClassName = {"paginationButtons"}
      previousLinkClassName = {"previusButton"}
      nextLinkClassName = { "nextButton"}
      disabledClassName = {"disabledButton"}
      activeClassName = {"activeButton"}
      onClick = {window.scrollTo({top: 0, behavior: 'smooth'})}
      />
      </div> 
        </div>
        </div>

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </motion.div>
  )
}

export default News