import react from 'react';
import { FaBars } from "react-icons/fa";
import {CloseBtn} from './style'



const CloseButton = (props)=>{
    
function teste(){

    props.action()
}
    return(<>
    <CloseBtn  onClick={()=> teste()}>
        
        {props.visible? 'X' : <FaBars size={50}/>}
        
        </CloseBtn>
    </>)
}

export default CloseButton