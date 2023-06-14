import React , {useContext, useState} from 'react'
import { motion } from "framer-motion"
import { Navigate, useNavigate } from 'react-router-dom'

import { FaSearch } from 'react-icons/fa'
import { SearchContext } from './Contexts/Context'
function HeaderBottom(){
    const {language } = useContext(SearchContext)
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
          if(search){
            navigate(`/search/${search}`)
          }
         
        }
       }
    return (<motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 0.5}}
    exit={{opacity: 0}} className='headerr'>
        <div className="headerBottom margin-10">
            <div>
                <div className="image-wrapper">
                    <img src={require('../Images/header_ka.jpg')} alt="" onClick={() => navigate('/') }/>
                </div>
                <div className="search-wrapper">
                    <input type="text" placeholder={language ? "ძიება" : "SEARCH"} onChange={(e)=> setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
                    <FaSearch onClick={() => search && navigate(`/search/${search}`)} />
                    
                </div>
            </div>
        </div>
    </motion.div>)
}

export default HeaderBottom