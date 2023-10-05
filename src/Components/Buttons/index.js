import React from 'react'
import {Button} from './styles'





const Buttons = (props)=>{
    return(<>
    <Button onClick={()=> props.actions()}>
        
        <div>
             {!props.exib? props.icon : props.icon2 }    
        </div>
        <div>
            
            {props.title}
            </div>
            </Button>
    </>)
}

export default Buttons;