import React , {useState, useEffect , useContext } from 'react'
import { useNavigate , useParams  , Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate'
import { motion } from 'framer-motion'
import { articles } from './DataArrays/Articles'
import { SearchContext } from './Contexts/Context';

import { FaArrowLeft, FaSearch , FaArrowRight } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'
import HeaderBottom from './HeaderBottom'
function Rubrics() {
    const navigate = useNavigate();
    const { id } = useParams();
    

    const [rubrics, setRubrics] = useState([])
    const [englishCategory, setEnglishCategory] = useState('')
  useEffect(()=>{
    
   
    fetch('https://new.georgianart.ge/api/magazine.php?magazine=all')
    .then((response) => response.json())
    .then((data) => {
     
       console.log(data)
     
   

     
   const filteredArray = data.filter(obj => 
    obj.geo.category &&  obj.geo.category.some(category =>
     
      category.name.geo === id ));
      
    
      setRubrics(filteredArray)


      for(let p of data) {
                            for (let i of p.geo.category) {
                             
                              if (i.name.geo === id) {
                                setEnglishCategory(i.name.eng)
                                return i;}
                            }
      }


      
    
    })
   
    .catch((err) => {
       console.log(err.message);
    });


  },[])
  
     
     const {language} = useContext(SearchContext)
     const [pageNumber, setPageNumber] = useState(0);
     const usersPerPage = 4;
     const pagesVisited = pageNumber * usersPerPage;
     const pageCount =  rubrics && Math.ceil(rubrics.length / usersPerPage); 
     const pageChange = ({selected}) => {
     setPageNumber(selected)
     }
    
    console.log(rubrics)
   // console.log(englishCategory)

  const productsList = rubrics ? rubrics.slice(pagesVisited, pagesVisited + usersPerPage).map((product,index)=>{
    
    return  <>
               <div className="landing-top-card" key={product.geo.text}>
                    <img src={`https://new.georgianart.ge/${product.geo.img}`} alt="" />
                    <div className="landing-top-card-text-container">
                        <span>{language ? product.geo.title : product.eng.title}</span>
                        <span>{language ? product.geo.author : product.eng.author}</span>
                        <span dangerouslySetInnerHTML={{__html: language ? product.geo.intro : product.eng.intro}}></span>
                        <Link to={`/rubrics/${id}/${product.geo.rec_id}`}>
                            <button>{language ? "ვრცლად" :   "IN DETAIL"}</button>
                            </Link>
                    </div>
                </div>
           
            </>

  }) : "loading"



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
                  <span className="underline">{language ? id : englishCategory}</span>
                  <Helmet><title>{language ? id : englishCategory}</title></Helmet>
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

export default Rubrics




























 
 
  