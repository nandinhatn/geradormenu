import react, {useEffect, useState} from 'react'

import {TextTitulos} from './style'




const SlideControl = (props)=>{

   
   
  

 return(<>

 <TextTitulos>{props.title}</TextTitulos>

<input
  type="range"
  step={1}
  min={props.min}
  max={props.max}
  
  onChange={(e)=> props.action(e.target.value)}
 
 
  
  
/>
 </>)   
}

export default SlideControl;