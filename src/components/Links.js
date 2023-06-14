import React, { useContext } from 'react'
import HeaderBottom from './HeaderBottom'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { SearchContext } from './Contexts/Context'
function Links() {
  const {language} = useContext(SearchContext)
  return (
    <motion.div  
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 0.5}}
    exit={{opacity: 0}}>
        <HeaderBottom/>
        <div className="links margin-10">
            <header>{language ?  "ბმულები" :   "LINKS"}</header>
            <Helmet><title>{language ?  "ბმულები" :   "LINKS"}</title></Helmet>
            <p>{language ?   "აქ განთავსებულია ყველა ის საინტერესო ბმული, რომელიც ნაწილობრივ მაინც დააკმაყოფილებს ჩვენი საიტის ვიზიტორებს. თქვენ შეგიძლიათ გამოგზავნოთ თქვენთვის საინტერესო ბმულები და ჩვენ დაინტერესების შემთხვევაში განვათავსებთ მათ ჩვენი ბმულების კატეგორიებში." 
            :    
            "Here are all the interesting links that will at least partially satisfy the visitors of our site. You can submit links of interest to you and we will place them in our link categories if interested."}
            </p>
            <div className="links-container">
                <span>  {language ? "სპეციალური ბმულები" :  "SPECIAL LINKS"}
                    <a href='https://www.google.com/' target='_blank' rel="noreferrer">
                    <div><FaArrowRight/></div>
                    </a>
                </span>
                <div className="links-container-array">
                   <ol>
                     <li><div className="links-container-items">
                            <span>    Project Muse</span>
                            <a href='http://muse.jhu.edu/journals/mod/' target='_blank' rel="noreferrer">http://muse.jhu.edu/journals/mod/ </a>
                          </div>
                     </li>  
                    
                   </ol>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Links