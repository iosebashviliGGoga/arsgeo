import React , {useState , useEffect, useContext}from 'react'
import { Link , useNavigate  , useParams} from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { motion } from 'framer-motion'
import { articles } from './DataArrays/Articles'
import { SearchContext } from './Contexts/Context'

import { FaArrowLeft, FaSearch , FaArrowRight } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'
import TopJournal from './atoms/TopJournal'
function Articles() {
  const {language} = useContext(SearchContext)
    const navigate = useNavigate()
    const {id} = useParams()
    const [search, setSearch] = useState('')


    const [intro,setIntro] = useState({})
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
          if(search){
            navigate(`/search/${search}`)
          }
         
        }
       }
       const [article , setArticle] = useState({})
       useEffect(()=>{
    
   
        fetch('https://new.georgianart.ge/api/magazine.php')
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
           data.map((item)=>{
            if(item.year === id){
               // console.log(item)
                item.intro && setIntro(item.intro)
                const link = `https://new.georgianart.ge/api/magazine.php?cat_id=${item.cat_id}`
              //  console.log(link)
              //  console.log(link)
                fetch(link)
                .then((response) => response.json())
                .then((data) => {
                  // console.log(data);
                  
                   setArticle(data);
                })
                .catch((err) => {
                 console.log(err.message);
                });
            }
            
           })
          
        })
        .catch((err) => {
           console.log(err.message);
        });
    
    
      },[])

      /*
     //pagination 
     
     const [pageNumber, setPageNumber] = useState(0);
     const usersPerPage = 4;
     const pagesVisited = pageNumber * usersPerPage;
     const pageCount = Math.ceil(article.length / usersPerPage);
     const pageChange = ({selected}) => {
     setPageNumber(selected)
     }
     */


     const productsList = article ? Object.entries(article).sort((a, b) => b[1].geo.date.localeCompare(a[1].geo.date)).map((product,index)=>{
        
        return  <>
                   <div className="landing-top-card" key={product[1].geo.title}>
                        <img src={`https://new.georgianart.ge/${product[1].geo.img}`} alt="" />
                        <div className="landing-top-card-text-container">
                            <span>{language ? product[1].geo.title : product[1].eng.title}</span>
                           {/* <span>{language ? product[1].geo.author : product[1].eng.author}</span> */}
                            <span dangerouslySetInnerHTML={{__html: language ? product[1].geo.intro : product[1].eng.intro }}></span>
                            <Link to={`/magazine/${id}/${product[1].geo.rec_id}`}>
                                <button>{language ?  "ვრცლად" :  "IN DETAIL"}</button>
                                </Link>
                        </div>
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
          <a href={`/rubrics/${rubric.name.geo}`}>{rubric.name.geo}</a>
          
          
                </>
      })   :  "loading"

   

      
     
      const [height, setHeight] = useState(0)
      const [WW, setWW] = useState(window.innerWidth)
     
      






  return (
    <motion.div  
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 0.5}}
    exit={{opacity: 0}}>
    <div className="landing-top margin-10">
                    <div className="landing-top-gray" style={{height: height ? ((WW > 1000) ? (height - 100 ) : (height - 300)) : ""}}>
                        <div>
                            <div className="image-wrapper">
                                <img src={require('../Images/Mask Group 1.png')} alt="" onClick={() => navigate('/')}/>
                            </div>
                            <div className="search-wrapper">
                                <input type="text" placeholder={language ? "ძიება" :  "SEARCH"} onChange={(e)=> setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
                                <FaSearch onClick={(e) => search && navigate(`/search/${search}`)}/>
                           </div>
                        </div>
                    </div>
                    <div className="landing-bottom-yellow" style={{height: height ? (height * 0.4 ) : ""}}>
                         <div className="rubrics" style={{paddingTop: (height >500) ?   (WW < 1000)?  350 :  ""    :   ""}}>
                            {rubricsUI}
                        </div>
                    </div>
                  <TopJournal
                      data={intro} 
                      height={height} 
                      setHeight={setHeight}/>
        </div>
        <div className="articles-container margin-10">
            
        <header>
            <div onClick={() => navigate(-1)}>
                <div> <FaArrowLeft /></div> <span>{id}</span>
            </div>
            <div className="hanging-text">
                  <span className="underline">{language ?  "სტატიები" :  "ARTICLES"}</span>
                  <Helmet><title>{id}</title></Helmet>
            </div>
        </header>
        <div className="article-array">
        {productsList}
      { /* <div className="pagination">
       
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
        </div>

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </motion.div>
  )
}

export default Articles