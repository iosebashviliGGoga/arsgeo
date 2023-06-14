import React , { useState, useEffect , useContext , useRef}from 'react'
import {useNavigate,Link  } from 'react-router-dom'
import { SearchContext } from './Contexts/Context'

import {FaInstagram , FaFacebook, FaYoutube, FaTwitter} from 'react-icons/fa'
import { FaSearch , FaAngleDown } from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import{HiOutlineShoppingBag} from 'react-icons/hi'
function Header() {


  const {language} = useContext(SearchContext)
  const {setLanguage} = useContext(SearchContext)

 



  const handleSlug = (slug) =>{
     // console.log(window.location.pathname.includes(slug) );
      //console.log(window.location.pathname)
      
     
      if(window.location.pathname == slug){
            return true
      } else return false
      
  }
  const navigate = useNavigate();

  
  const [searchItem, setSearchItem] = useState('')


  

  const ref = useRef();
  
  useEffect(() => {   
      const burgerButtonToggler = ref.current

  }, []);

  const handleBurgerButton = () => {
    
    ref.current.checked = false
  };
 


  //const [languageId , setLanguageId] = useState(1)
 
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      if(searchItem){
        navigate('/search')
      }
     
    }
   }
   const [languageId, setLanguageId] = useState(true)

   





   const handleLanguageChange = e => {
     if(!e.target.className){
      setLanguageId((prev)=> !prev)
      setLanguage((prev)=> !prev)
     }
   }






  return (
    <>
    
    <div className="header-bottom padding-10" >
    
    <div>
        <nav>
            <Link className={  handleSlug('/news') ?  "active"   :   ""} to='/news'>{language ? "სიახლე" : "NEWS"}</Link>
            <Link className={  handleSlug('/about') ?  "active"   :   ""} to='/about'>{language ? "ჩვენს შესახებ" : "ABOUT US"}</Link>
            <Link className={  handleSlug('/magazine') ?  "active"   :   ""} to='/magazine'>{language ? "ჟურნალი " : "MAGAZINE"}</Link>
            <Link className={ handleSlug('/chronicle') ?  "active"   :   ""} to='/chronicle'>{language ? "ქრონიკა" : "CHRONICLES"}</Link>
            <Link className={  handleSlug('/contact') ?  "active"   :   ""} to='/contact'>{language ? "კონტაქტი" : "CONTACT"}</Link>
            <Link className={  handleSlug('/for-authors') ?  "active"   :   ""} to='/for-authors'>{language ? "ავტორებისთვის" : "FOR AUTHORS"}</Link>
           {/* <Link className={  handleSlug('/links') ?  "active"   :   ""} to='/links'>{language ? "ბმულები" : "LINKS"}</Link> */}
            
        </nav>
        <div className="nav-right">
      
       
        <div className="languager">
            <span className={languageId ? 'lang-active' : ""} onClick={(e)=> handleLanguageChange(e)}>GE</span>
            <span onClick={(e)=> handleLanguageChange(e)} className={languageId ? "" : 'lang-active'}>EN</span>
        </div>
        
        </div>
    </div>
    </div>
    
    <section className="top-nav padding-10">
    <div className="languager">
            <span className={languageId ? 'lang-active' : ""} onClick={(e)=> handleLanguageChange(e)}>GE</span>
            <span onClick={(e)=> handleLanguageChange(e)} className={languageId ? "" : 'lang-active'}>EN</span>
        </div>
    <input id="menu-toggle" type="checkbox" ref={ref} />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
            <Link className={  handleSlug('/news') ?  "active"   :   ""} to='/news' onClick={handleBurgerButton}>{language ? "სიახლე" : "NEWS"}</Link>
            <Link className={  handleSlug('/about') ?  "active"   :   ""} to='/about' onClick={handleBurgerButton}>{language ? "ჩვენს შესახებ" : "ABOUT US"}</Link>
            <Link className={  handleSlug('/magazine') ?  "active"   :   ""} to='/magazine' onClick={handleBurgerButton}>{language ? "ჟურნალი " : "MAGAZINE"}</Link>
            <Link className={  handleSlug('/chronicle') ?  "active"   :   ""} to='/chronicle' onClick={handleBurgerButton}>{language ? "ქრონიკა" : "CHRONICLES"}</Link>
            <Link className={  handleSlug('/contact') ?  "active"   :   ""} to='/contact' onClick={handleBurgerButton}>{languageId ? "კონტაქტი" : "CONTACT"}</Link>
            <Link className={  handleSlug('/for-authors') ?  "active"   :   ""} to='/for-authors' onClick={handleBurgerButton}>{language ? "ავტორებისთვის" : "FOR AUTHORS"}</Link>
          {/*  <Link className={  handleSlug('/links') ?  "active"   :   ""} to='/links' onClick={handleBurgerButton}>{language ? "ბმულები" : "LINKS"}</Link> */}
    </ul>
  </section>


    </>
  )
}

export default Header