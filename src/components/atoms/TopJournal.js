import React , {useState, useEffect, useContext, useLayoutEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import { SearchContext } from '../Contexts/Context';
function TopJournal({height,data,setHeight}) {
  
  

    
   //console.log({data})
    const {language} = useContext(SearchContext)
    const [magazine, setMagazine] = useState({})
    
    

       useEffect(()=>{
    
       
        fetch('https://new.georgianart.ge/api/magazine.php')
        .then((response) => response.json())
        .then((data) => {
          
          
          
            data.sort((a,b) => {return b.year - a.year}).map((item,i)=>{
                if(i == 0 ){
                    setMagazine(item)
                }
            })
          


          
          
        })
        .catch((err) => {
           console.log(err.message);
        });

      
    
    
      },[])

      
      const ref = useRef(null)

      useLayoutEffect(()=>{
        
        ref.current && setHeight(ref.current.scrollHeight)
      })
      function htmlDecode(intro) {
        let e = document.createElement('div');
        e.innerHTML = intro;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue; }
      
      const topUI = data && Object.entries(data).length ?    <>
              <div className="landing-top-card" ref={ref}>
              {  /*<img src={require('../../Images/2.png')} alt="" className='shrinked'/> */}
                <div className="landing-top-card-text-container" dangerouslySetInnerHTML={{__html: htmlDecode(data)}}>
              
                </div>

              </div>

      
      
      
      
      
      
      
                                      </>    : 
      
      
      
      
      
      <>
      <div className="landing-top-card ">
        {  /*<img src={require('../../Images/2.png')} alt="" className='shrinked'/> */}
          <div className="landing-top-card-text-container">
              <span>ელექტრონული ჟურნალი Ars Georgica</span>
              
              <span>გიორგი ჩუბინაშვილის სახელობის ქართული ხელოვნების ისტორიისა და ძეგლთა დაცვის კვლევის ეროვნული ცენტრის ელექტრონული ჟურნალი Ars Georgica ახალი და თანამედროვე ხელოვნების საკითხებს ეთმობა. იგი, უმთავრესად, ამ დროის ქართული ხელოვნების ისტორიას, მის მხატვრულ-ესთეტიკურ პრობლემებთან და ახალი და თანამედროვე ქართული კულტურის საკითხებთან დაკავშირებულ გამოკვლევებს მოიცავს. <br/><br/>

Ars Georgica გ. ჩუბინაშვილის სახელობის ქართული ხელოვნების ისტორიის ინსტიტუტის სამეცნიერო ნაშრომთა კრებულს წარმოადგენდა. 1942-2001 წლებში გამოიცა მისი თერთმეტი ტომი. მე-6 ტომიდან ჟურნალი ორ - A და B სერიად გაიყო. A სერია ძველი ხელოვნებისადმი მიძღვნილ კვლევებს ეთმობოდა, B სერია კი - ახალ და თანამედროვე ქართულ ხელოვნებას. Ars Georgica-ს ელექტრონული გამოცემით ჟურნალის B სერია განახლდა. <br/><br/>

დროთა განმავლობაში ელექტრონული ჟურნალის არქივში განთავსდება წინა წლებში გამოცემული „ARS GEORGICA“ -ს A და B ტომებში დაბეჭდილი ის სტატიები, რომლებშიც განხილულია ახალი და თანამედროვე ქართული ხელოვნების საკითხები.</span>
              <Link to={`/about`}>
                  <button>{language ?  "ვრცლად"  :   "SEE MORE"}</button>
              </Link>
          </div>
      </div>







                                              </>  
  return (
    <>
     {topUI}
    </>
  
  )
}

export default TopJournal