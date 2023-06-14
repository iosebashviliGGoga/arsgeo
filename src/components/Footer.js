import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'
import { ImEarth } from 'react-icons/im'
import { CgWebsite } from 'react-icons/cg'
function Footer() {
  return (
    <motion.div intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='footer'>

      <span>COPYRIGHT © 2022 ARS GEORGICA </span>
      <span>CONTACT INFORMATION: (+995 32)931338, (+995 32)931538, E-MAIL: RESEARCH@GCH-CENTRE.GE</span>
     
      <div className='social__container'> <a href="https://www.facebook.com/ChubinashviliCentre" target="_blank" rel="noopener noreferrer"><FaFacebook /> </a>
      <a href="https://www.youtube.com/@chubinashvilicentre/featured" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      <a href="https://twitter.com/ChubinashviliC?fbclid=IwAR2p4gFCCWPbllcJ0g2Uw0jswbe_WHYGPV75U-wby_g2nfWtZUOSRXlD_gs" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
             <a href="http://www.gch-centre.ge/" target="_blank" rel="noopener noreferrer"><ImEarth /></a>
             <a href="https://el.ge/search?tag=%E1%83%A9%E1%83%A3%E1%83%91%E1%83%98%E1%83%9C%E1%83%90%E1%83%A8%E1%83%95%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1+%E1%83%AA%E1%83%94%E1%83%9C%E1%83%A2%E1%83%A0%E1%83%98" target="_blank" rel="noopener noreferrer"><CgWebsite /></a>
      </div>
      <span style={{marginTop: '10px'}}>CREATED BY <a href="https://proservice.ge/" target='_blank' rel="noreferrer"> PROSERVICE</a></span>


    </motion.div>
  )
}

export default Footer