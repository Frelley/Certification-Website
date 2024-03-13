import { useState } from 'react'
import Markdown from "./Markdown"
import Quotes from "./Quotes"
import MusicBox from "./MusicBox"
import Calculator from "./Calculator"





function App() {
  const [show, setshow] = useState(0)
 

  return (
    <>
    <section className="btn-container">
    <button>Welcome Page</button>
    <button onClick={(e) =>setshow(<Quotes/>)}>Quotes for the day</button>
    <button onClick={(e) =>setshow(<Markdown/>)}>Markdown Previewer</button>
    <button onClick={(e)=>setshow(<MusicBox/>)}>Drum Machine </button>
    
    <button>Button</button>
    <button>Button</button>
    </section>
    
  
    <section id="current">
      {show}
     <Calculator />
    </section>
   
     
    </>
  )
}

export default App
