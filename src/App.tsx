 
import Experience from './components/Experience'

import {titlePrincipal} from './data/data'
import {experiences} from "./data/data"


function App() {
   
  

  return (
    <> 
        <h1 className='text-3xl underline font-bold'>{titlePrincipal}</h1>
        {experiences.map((experience) => {
        return <Experience {...experience}/>
          
})}
    </>
  )
}

export default App
