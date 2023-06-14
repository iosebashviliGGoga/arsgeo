import React , {useState , useEffect, useContext} from 'react'
import { articles } from './DataArrays/Articles';
import HeaderBottom from './HeaderBottom'
import {useParams , Link , useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaFacebookF, FaLink, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { SearchContext } from './Contexts/Context';

function Rubrics1() {
    const {language} = useContext(SearchContext)
    const navigate = useNavigate();
    const  id  = useParams();
    const url = window.location.href
    const [exactArticle, setExactArticle] = useState({})
    const [exactArticleEng, setExactArticleEng] = useState({})
    

    useEffect(() => {
        const link = `https://new.georgianart.ge/api/magazine.php?magazine_id=${id.id2}&lang=geo`
                       
        fetch(link)
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setExactArticle(data[0]);
        })
        .catch((err) => {
           console.log(err.message);
        });

        const link2 = `https://new.georgianart.ge/api/magazine.php?magazine_id=${id.id2}&lang=eng`
                       
        fetch(link2)
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setExactArticleEng(data[0]);
        })
        .catch((err) => {
           console.log(err.message);
        });
       
        

    }, [])

    const exactArticleUI = Object.entries(exactArticle) ? <>
    {/*  <header>
            <div>
                <div onClick={()=>navigate(-1)}> <FaArrowLeft/></div> <span>2021 (II ნაწილი)</span>
            </div>
    </header>
*/ }
    <div className='exact-article '>
        <div>
            <p>{exactArticle.title}</p>
            <Helmet><title>{exactArticle.title}</title></Helmet>
            <p>{exactArticle.author ?exactArticle.author  :  "ავტორი"}</p>
            <p>გიორგი ჩუბინაშვილის სახელობის ქართული ხელოვნების ისტორიისა და ძეგლთა დაცვის ეროვნული კვლევითი ცენტრი</p>

            <p className='bold' dangerouslySetInnerHTML={{__html: exactArticle.intro}}></p>
            <div className="paragraphs">
               <p dangerouslySetInnerHTML={{__html: exactArticle.text ? exactArticle.text.replaceAll('<img' , '<img data-fancybox="gallery" ').replaceAll('../uploads','https://new.georgianart.ge/uploads') : ""}}></p>
            </div>
        
        </div>






     <div>
      


        {/*   <img src={exactArticle.img} alt="heey" /> 
           <img src={exactArticle.img} alt="heey" /> 
           <img src={exactArticle.img} alt="heey" /> 
           <div className="halfs">
                <img src={exactArticle.img} alt="heey" /> 
                <img src={exactArticle.img} alt="heey" /> 
           </div>
           <img src={exactArticle.img} alt="heey" /> 
        */} 
        </div>
    
    
    
    
    </div>
    
    </> : "loading"

const exactArticleUIEng = Object.entries(exactArticleEng) ? <>
{/*  <header>
        <div>
            <div onClick={()=>navigate(-1)}> <FaArrowLeft/></div> <span>2021 (II ნაწილი)</span>
        </div>
</header>
*/ }
<div className='exact-article '>
    <div>
        <p>{exactArticle.title}</p>
        <Helmet><title>{exactArticle.title}</title></Helmet>
        <p>{exactArticle.author ?exactArticle.author  :  "Author"}</p>
        <p>გიორგი ჩუბინაშვილის სახელობის ქართული ხელოვნების ისტორიისა და ძეგლთა დაცვის ეროვნული კვლევითი ცენტრი</p>

        <p className='bold' dangerouslySetInnerHTML={{__html: exactArticle.intro}}></p>
        <div className="paragraphs">
           <p dangerouslySetInnerHTML={{__html: exactArticle.text ? exactArticle.text.replaceAll('<img' , '<img data-fancybox="gallery"  ').replaceAll('../uploads','https://new.georgianart.ge/uploads') : ""}}></p>
        </div>
    
    </div>






 <div>
  


    {/*   <img src={exactArticle.img} alt="heey" /> 
       <img src={exactArticle.img} alt="heey" /> 
       <img src={exactArticle.img} alt="heey" /> 
       <div className="halfs">
            <img src={exactArticle.img} alt="heey" /> 
            <img src={exactArticle.img} alt="heey" /> 
       </div>
       <img src={exactArticle.img} alt="heey" /> 
    */} 
    </div>




</div>

</> : "loading"



   

    
  return (
    <motion.div  
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 0.5}}
    exit={{opacity: 0}}>
    <HeaderBottom/>
    <div className="articles-container margin-10 news1">
   
    
       {language ? exactArticleUI : exactArticleUIEng}
   
   
    <div className='flex'>
        <div className="circle" onClick={()=>navigate(`/rubrics/${id.id}`)}>
          <div ><FaArrowLeft/></div> <span>{language ? "უკან დაბრუნება"  :  "BACK"}</span>
        </div>
        <div className="share">
            <span> {language  ? "გააზიარე:"  :  "SHARE:"}</span> 
            <a href={`https://www.facebook.com/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
            <a href={`https://www.facebook.com/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
            <a href={`https://www.facebook.com/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            <p onClick={() => navigator.clipboard.writeText(url)}><FaLink/></p>
        </div>
    </div>

    



    </div>
    
    
    
    
    
    </motion.div>
  )
}

export default Rubrics1