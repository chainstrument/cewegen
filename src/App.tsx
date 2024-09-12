 
import Experience from './components/Experience'

import {titlePrincipal} from './data/data'
import {experiences} from "./data/data"


function App() {
   
  

  return (
    <div className='flex aligns-items-center flex-col'> 
        <h1 className='text-3xl underline font-bold'>{titlePrincipal}</h1>
        {experiences.map((experience) => {
                return <Experience {...experience} className="gap-4"/>
                  
        })}
    </div>
  )
}

export default App
