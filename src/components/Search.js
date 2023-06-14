import React, { useContext , useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import HeaderBottom from './HeaderBottom'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { SearchContext } from './Contexts/Context'
function Search() {
  const {language} = useContext(SearchContext)
    const {id} = useParams()



    const [magazines, setMagazines] = useState({})
    const [articles, setArticles] = useState([])
    const [news, setNews] = useState([])
    useEffect(()=>{

      fetch('https://new.georgianart.ge/api/magazine.php?magazine=all')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
            setArticles(data)
          
        })
        .catch((err) => {
           console.log(err.message);
        });

        
 

     fetch('https://new.georgianart.ge/api/magazine.php')
     .then((response) => response.json())
     .then((data) => {
      //  console.log(Object.entries(data));
        setMagazines(data)


       
       
     })
     .catch((err) => {
       // console.log(err.message);
     });



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

   const newsList = news ?  news.filter((item => item.geo.title.includes(id) || item.eng.title && item.eng.title.includes(id))).map((product,index)=>{

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

  }) : "ვერ მოიძებნა"
  const newsListFull = <>
        <header>{language ? 'სიახლეები' : "NEWS"}</header>
        <div className="article-array">
          {newsList}
        </div>
  
                        </>



   const articleUI = articles ? articles.filter((item => item.geo.title.includes(id) || item.eng.title && item.eng.title.includes(id))).map((product) =>{
    return <>
         <div className="landing-top-card" key={product.geo.title}>
                      
                        <div className="landing-top-card-text-container">
                            <span>{language ? product.geo.title : product.eng.title}</span>
                            <span>{language ? product.geo.author : product.eng.author}</span>
                            <span dangerouslySetInnerHTML={{__html: language ? product.geo.intro : product.eng.intro }}></span>
                            <Link to={`/magazine/${product.geo.magazine[0].name.geo}/${product.geo.rec_id}`}>
                                <button>{language ?  "ვრცლად" :  "IN DETAIL"}</button>
                                </Link>
                        </div>
                    </div>



          </>
   }) : "";

    const articleUIFull = <>
      <header>{language ? 'სტატიები' : "ARTICLES"}</header>
      <div className='article-array'>
        
        {articleUI}
      </div>


                          </>


   
   const magazineUI =  magazines?Object.entries(magazines).filter(item => item[1].name.geo.includes(id) ||  item[1].name.eng.includes(id)).sort((a, b) => b[1].year  - a[1].year).map((item,index)=>{
   // console.log(item)

    return <>



   <div key={language ? item[1].name.geo : item[1].name.eng  }>
     <Link to={`/magazine/${item[1].year}`}>
         <div className='landing-array-item' >
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

  const magazineUIFull = <>
  
            <header>{language ? "ჟურნალები": "MAGAZINES"}</header>
            <div className="search-array">
            {magazineUI}
            </div>
            
  
  
  
                        </>








  return (
    <>
        <motion.div  
        intial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 0.5}}
        exit={{opacity: 0}}>
        </motion.div>
        <HeaderBottom/>
        <div className="search margin-10">
            
            <header>{language ? `ძიების რეზულტატი ` : "SEARCH RESULT FOR - "}<span className="main-color">{id}</span>{language ? " - ისთვის" : ""}</header>
            <Helmet><title>{language ? "ძებნა " : "SEARCH"} - {id}</title></Helmet>


            <div className="search-wrapper">
              {Object.entries(magazines).filter(item => item[1].name.geo.includes(id) ||  item[1].name.eng.includes(id)).length ?  magazineUIFull : ""}
            
            </div>
            
            {articles.filter((item => item.geo.title.includes(id) || item.eng.title && item.eng.title.includes(id))).length ? articleUIFull : ""}

            {news.filter((item => item.geo.title.includes(id) || item.eng.title && item.eng.title.includes(id))).length ? newsListFull : ""}
            
        </div>
    </>
  )
}

export default Search