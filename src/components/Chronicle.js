import React , {useState , useEffect, useContext} from 'react'
import  {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import { chronicless } from './DataArrays/Chronicles'
import HeaderBottom from './HeaderBottom'
import { Helmet } from 'react-helmet-async'
import { SearchContext } from './Contexts/Context'
function Chronicle() {
  const {language} = useContext(SearchContext)
  const [chronicles, setChronicles] = useState([])
  useEffect(()=>{
    
   
    fetch('https://new.georgianart.ge/api/chronicle.php?chronicle=all')
    .then((response) => response.json())
    .then((data) => {
       console.log(data);
      setChronicles(data)
      
    })
    .catch((err) => {
      // console.log(err.message);
    });


  },[])


  return (
    <motion.div intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 0.5}}
    exit={{opacity: 0}} >
      <HeaderBottom/>
       <div className='chronicles margin-10'>
         <header >{language ? "ქრონიკა" :  "CHRONICLES"}</header>
         <Helmet><title>{language ? "ქრონიკა" :  "CHRONICLES"}</title></Helmet>
        
         <div className="chronicles-container ">
            {chronicles.map((item,i)=> {
             return <Link to={item.geo.rec_id}  key={item.geo.rec_id}>
            
            
                <div>
                  <div className='chronicles-flex'>
                    
                    <li>{i + 1 }.  <span>{language ? item.geo.title : item.eng.title}</span></li>

                   {/* <span>12542</span> */}
                  </div>
                    
                  <div className="linear-gradient"></div>
                </div>
             
                
            
        
        
        
             
                   </Link>
            })}
         </div>
       </div>
        
        
        
        
    </motion.div>
  )
}

export default Chronicle