import React , {useState , useEffect , useRef, useContext} from 'react'
import { articles } from './DataArrays/Articles';
import HeaderBottom from './HeaderBottom'
import {useParams , Link , useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaFacebookF, FaLink, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { SearchContext } from './Contexts/Context';



import Fancybox from './atoms/Fancybox';
function Articles1() {
  const {language} = useContext(SearchContext)
    const navigate = useNavigate();
    const { id, id2 } = useParams();
    
    const url = window.location.href
    const [exactArticle, setExactArticle] = useState({})
    const [exactArticleEng, setExactArticleEng] = useState({})
    
  
   

    useEffect(()=>{
    
      const link = `https://new.georgianart.ge/api/magazine.php?magazine_id=${id2}&lang=geo`
      fetch(link)
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setExactArticle(data)
        
        
      })
     
      .catch((err) => {
         console.log(err.message);
      });

      const link2 = `https://new.georgianart.ge/api/magazine.php?magazine_id=${id2}&lang=eng`
      fetch(link2)
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setExactArticleEng(data)
        
        
      })
     
      .catch((err) => {
         console.log(err.message);
      });

    
  
  
    },[])

    const exactArticleUI = Object.entries(exactArticle).length ? <>
     <header>
            <div>
                <div onClick={()=>navigate(`/magazine/${id}`)}> <FaArrowLeft/></div> <span>{id}</span>
            </div>
    </header>
    <div className='exact-article'>
        <div>
            <p>{language ? exactArticle[0].title : exactArticleEng[0].title}</p>
            <Helmet><title>{language ? exactArticle[0].title : exactArticleEng[0].title}</title></Helmet>
            <p>{language ? exactArticle[0].author : exactArticleEng[0].author}</p>
           

            
            
           
  
   
     <div className="paragraphs" dangerouslySetInnerHTML={{__html: language ?
                exactArticle[0].text ? exactArticle[0].text.replaceAll('../uploads','https://new.georgianart.ge/uploads').replaceAll('<img' , '<img data-fancybox="gallery"  ').replaceAll('title=' , "data-caption=")
                
                   : 
                exactArticleEng[0].text.replaceAll('../uploads','https://new.georgianart.ge/uploads')
                .replaceAll('<img' , '<img data-fancybox="gallery"  ').replaceAll('title=' , "data-caption=") : ""}}>
               
            </div>
  

        
        </div>
        





        <div>
          
        

          { /*<img src={exactArticle.img} alt="heey" /> 
           <img src={exactArticle.img} alt="heey" /> 
           <div className="halfs">
                <img src={exactArticle.img} alt="heey" /> 
                <img src={exactArticle.img} alt="heey" /> 
           </div>
           <img src={exactArticle.img} alt="heey" /> 
          */}
        </div>
    
    
    </div>
   { /* <div className="used-literature">
        <p>გამოყენებული ლიტერატურა:</p>
       <div>
         <p>1. ინტერვიუ ალ. ბანძელაძესთან "სპექტრი" N 2, 1999</p>
         <p>2. ლ. ცუცქირიძის პირადი ჩანაწერები.</p>
         <p>3.Т. Вирсаладзе  "Фресковая Роспись в церкви Архангелов села Земо- Крихи".</p>
         <p>4.თ. ინწკირველი "საეკლესიო მონუმენტური მხატვრობა კომუნისტური ეპოქის საქართველოში". (სამაგისრტო ნაშრომი), 2007;</p>
       </div>
       
        </div> */}
    </> : "loading"




   

    
  return (
    <motion.div  
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 0.5}}
    exit={{opacity: 0}}>
    <HeaderBottom/>
    <div className="articles-container margin-10">
   
    
       {exactArticleUI}
   
   
    <div className='flex'>
        <div className="circle" onClick={()=>navigate(`/magazine/${id}`)}>
          <div ><FaArrowLeft/></div> <span>{language ? "უკან დაბრუნება" :  "BACK"}</span>
        </div>
        <div className="share">
            <span>{language ? "გააზიარე" :  "SHARE"}:</span> 
            <a href={`https://www.facebook.com/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
            <a href={`https://www.facebook.com/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
            <a href={`https://www.facebook.com/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            <p onClick={() => navigator.clipboard.writeText(url)}><FaLink/></p>
        </div>
    </div>





    </div>
    
    
    
    
    <Fancybox options={{ infinite: false }}>        </Fancybox>
    </motion.div>
  )
}

export default Articles1