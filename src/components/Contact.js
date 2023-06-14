import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import HeaderBottom from './HeaderBottom'
import { Helmet } from 'react-helmet-async'
import { SearchContext } from './Contexts/Context'
function Contact() {
  const {language} = useContext(SearchContext)
  return (
    <motion.div  
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 0.5}}
    exit={{opacity: 0}}>
      <HeaderBottom/>
    <div className="contact margin-10">
      <header>{language ? "კონტაქტი"  : "CONTACT"}</header>
      <Helmet><title>{language ? "კონტაქტი"  : "CONTACT"}</title></Helmet>
      <div className="contact-wrapper">
        <div className="contact-text">
          <span>{language ? "მისამართი: 9/6 ათონელის ქ., 0105 თბილისი"  :   "ADDRESS: 9/6 Atoneli St,0105 Tbilisi , Georgia"}
</span>
          <span> <a href="http://www.georgianart.ge" target="_blank" rel="noopener noreferrer">www.georgianart.ge</a>, <a href="http://www.gch-centre.ge" target="_blank" rel="noopener noreferrer">www.gch-centre.ge</a>
</span>
          <span>{language ? "ტელეფონი:"  :  "PHONE:"} <a href="tel:+9950322990588" > 032 299 05 88</a>
</span>
<span>{language ? "ელ-ფოსტა:" :   "E-MAIL:"} g_ch_centre@yahoo.com</span>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.0349919496052!2d44.8043014!3d41.6981803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440ce421b77cab%3A0x290b1d499fb91539!2s0105%2C%209%20Atoneli%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1686744769203!5m2!1sen!2sge" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
      </div>
    </div>
    </motion.div>
  )
}

export default Contact