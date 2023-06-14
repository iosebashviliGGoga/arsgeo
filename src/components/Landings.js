import React, { useState , useEffect , useRef, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { articles } from './DataArrays/Articles'
import ReactPaginate from 'react-paginate'
import { motion } from 'framer-motion'

import TopJournal from './atoms/TopJournal'
import { FaSearch, FaArrowLeft , FaArrowRight } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'
import { SearchContext } from './Contexts/Context'




function Landings() {
  const {language } = useContext(SearchContext)
  const ref =  useRef(null)
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
          if(search){
            navigate(`/search/${search}`)
          }
         
        }
       }
       const [magazines, setMagazines] = useState({})
       useEffect(()=>{
    
   
        fetch('https://new.georgianart.ge/api/magazine.php')
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
           setMagazines(data)


          
          
        })
        .catch((err) => {
          // console.log(err.message);
        });
    
    
      },[])
    
       /*


     //pagination 
     
     const [article , setArticle] = useState(articles)
     const [pageNumber, setPageNumber] = useState(0);
     const usersPerPage = 4;
     const pagesVisited = pageNumber * usersPerPage;
     const pageCount = Math.ceil(article.length / usersPerPage);
     const pageChange = ({selected}) => {
     setPageNumber(selected)
     }
    

    */
    
    const articleUI =  magazines?Object.entries(magazines).sort((a, b) => b[1].year  - a[1].year).map((item,index)=>{
       // console.log(item)

        return <>
       <div key={language ? item[1].name.geo : item[1].name.eng  }>
         <Link to={`/magazine/${item[1].year}`}>
             <div className={index % 2 == 1 ? "landing-array-item margin-top" : "landing-array-item"} >
                           { /*<img src={item[1].image ? `https://new.georgianart.ge/${item[1].image}` : require('../Images/default.png')} alt="" /> */}
                                 <div>
                                     <span>{language ? item[1].name.geo : item[1].name.eng}</span>
                                     <span className='header'>{item[1].year}</span>
                                     
                                 </div>
             </div>
         </Link>
       </div>
                </>
    }) : "loading"

    const [rubrics, setRubrics] = useState([])
  useEffect(()=>{
    fetch('https://new.georgianart.ge/api/news.php')
    .then((response) => response.json())
    .then((data) => {
     //  console.log(data);
       setRubrics(data);
    })
    .catch((err) => {
    //   console.log(err.message);
    });


  },[])

  const rubricsUI = rubrics.length ? rubrics.map((rubric) => {
    //  console.log(rubric)
      return <>
      <a href={`/rubrics/${rubric.name.geo}`}>{language ? rubric.name.geo : rubric.name.eng}</a>
      
      
            </>
  })   :  "loading"
    
    

  return (
    <motion.div  
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 0.5}}
    exit={{opacity: 0}}>
          <div className="landing margin-10">
                <div className="landing-top">
                    <div className="landing-top-gray">
                        <div>
                            <div className="image-wrapper">
                                <img src={require('../Images/header_ka.jpg')} alt="" />
                            </div>
                            <div className="search-wrapper">
                                <input type="text" placeholder={language ? "ძიება" : "SEARCH"} onChange={(e)=> setSearch(e.target.value)} onKeyDown={handleKeyDown} />
                                <FaSearch onClick={(e) => search && navigate(`/search/${search}`)}/>
                           </div>
                        </div>
                    </div>
                    <div className="landing-bottom-yellow">
                        <div className="rubrics">
                            {rubricsUI}
                        </div>

                    </div>
                    <div>
                      <TopJournal />
                    </div>
                </div>
                <div className="landing-array">
                <div className="hanging-text">
                        <span className="underline">{language ? "ჟურნალი" :    "MAGAZINE"}</span>
                        <Helmet><title>ARS GEORGIA</title></Helmet>
                </div>
                {articleUI}
                    
                    
                    
                    
                </div>
                {/*     
                
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
  </div> */}





            </div>
    </motion.div>
  )
}

export default Landings