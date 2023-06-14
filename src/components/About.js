import React , {useContext, useState} from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import HeaderBottom from "./HeaderBottom"
import { Helmet } from "react-helmet-async"
import { SearchContext } from "./Contexts/Context"

function About(){
  
    const {language} = useContext(SearchContext)
    

    return (
    
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 0.5}}
    exit={{opacity: 0}}
   >
    <HeaderBottom/>
    <div  className='about margin-10'>
        <header>{language ? "ჩვენ შესახებ"  :   "ABOUT US "}</header>
        <Helmet><title>{language ? "ჩვენ შესახებ"  :   "ABOUT US "}</title></Helmet>
        <div className="about-paragraphs">
            <p>გიორგი ჩუბინაშვილის სახელობის ქართული ხელოვნების ისტორიისა და ძეგლთა დაცვის კვლევის ეროვნული ცენტრის ელექტრონული ჟურნალი Ars Georgica ახალი და თანამედროვე ხელოვნების საკითხებს ეთმობა. იგი, უმთავრესად, ამ დროის ქართული ხელოვნების ისტორიას, მის მხატვრულ-ესთეტიკურ პრობლემებთან და ახალი და თანამედროვე ქართული კულტურის საკითხებთან დაკავშირებულ გამოკვლევებს მოიცავს.</p>
            <p>Ars Georgica გ. ჩუბინაშვილის სახელობის ქართული ხელოვნების ისტორიის ინსტიტუტის სამეცნიერო ნაშრომთა კრებულს წარმოადგენდა. 1942-2001 წლებში გამოიცა მისი თერთმეტი ტომი. მე-6 ტომიდან ჟურნალი ორ - A და B სერიად გაიყო. A სერია ძველი ხელოვნებისადმი მიძღვნილ კვლევებს ეთმობოდა, B სერია კი - ახალ და თანამედროვე ქართულ ხელოვნებას. Ars Georgica-ს ელექტრონული გამოცემით ჟურნალის B სერია განახლდა.</p>
            <p>დროთა განმავლობაში ელექტრონული ჟურნალის არქივში განთავსდება წინა წლებში გამოცემული „ARS GEORGICA“ -ს A და B ტომებში დაბეჭდილი ის სტატიები, რომლებშიც განხილულია ახალი და თანამედროვე ქართული ხელოვნების საკითხები.</p>
        </div>
        <div className="linear-gradient"></div>
        <div className="about-redactions">
          <div>
              <div>
                  <span>{language ?  "მთავარი რედაქტორი"  : "Chief Editor"}:</span>
                  <span>{language ? "ელენე თუმანიშვილი " : "Elene Tumanishvili "}</span>
              </div>
              <div>
                  <span>{language ?  "მთავარი რედაქტორი"  : "Chief Editor"} (2010-2018): </span>
                  <span>{language ? "დიმიტრი თუმანიშვილი" :  "Dimitri Tumanishvili"}</span>
              </div>
              <div>
                  <span>{language ? "პასუხისმგებელი მდივანი" : "Responsible Secretary"}:</span>
                  <span>{language ?  "მარიამ გაჩეჩილაძე" :  "Mariam Gachechiladze"}</span>
              </div>
              
             
          </div>
          <div>
            <div>   
                    <span>{language ?  "სარედაქციო საბჭო"  :  "Editorial Board"}:</span>
                    <span>{language ?  "თამარ ბელაშვილი (საქართველო)" :  "Tamar Belashvili (Georgia)"}</span>
                    <span> {language ?  "მაია მანია (საქართველო)" :   "Maia Mania (Georgia)"} </span>
                    <span> {language ?  "პოლ მენინგი (კანადა)" : "Paul Maning (Canada)"}</span>
                    <span>{language ?   "მარინა მეძმარიაშვილი (საქართველო)"  :   "Marina Medzmarishvili (Georgia)"} </span>
                    <span>{language  ?  "პამელა რენერი (აშშ)"  :   "Pamela Renner (USA)"}  </span>
                   
              </div>
              <div>
                  <span>{language ?  "ლიტერატურული რედაქტორი" :   "Literary editor"}:</span>
                  <span>{language ? "თეა ტაბატაძე" : "Tea Tabatadze"}</span>
              </div>
              <div>
                  <span>{language ? "მხატვრული რედაქტორები" : "Feature Editors"}:</span>
                  <span>{language ? "სოფიო ჩიტორელიძე"  :   "Sofio Chitorelidze"}</span>
                  <span>{language ? "გიორგი პაპაშვილი (2011-2014)" : "Giorgi Papashvili (2011-2014)"}  </span>
              </div>
                
                
                
         </div>
        </div>
    </div>
      
    </motion.div>)
}
export default About