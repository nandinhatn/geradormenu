import react, {useState, useContext, useRef, useEffect} from 'react';


import {
    ContainerOptions,
    ImageThumbs

} from './style'
import { FaTrashRestoreAlt } from 'react-icons/fa';


const ListImages = (props)=>{
  console.log(props)

 
    return(
        <>
         <div>Imagens do Banco</div>
        <ContainerOptions>
          
           
            {props.listPhotos.length>0 ? 
            <>
              {props.listPhotos.map((el)=>{

                return(<>
                 {props.multiples?  
                 <>
                 {props.topoFoto.length< props.qtd ?     
                 
                 <ImageThumbs
                  width={50} 
                  onClick={()=> props.setTopoFoto([...props.topoFoto,`https://www.poppytecnologias.com.br/api_bolando/images/${el.url}`])} 
                  src={`https://www.poppytecnologias.com.br/api_bolando/images/${el.url}`}></ImageThumbs> 
                  
                  :    
                 
                 
                 ''}
                 
                 
                 </>  : 
                 
                 
                 <ImageThumbs
                 width={50} 
                 onClick={()=> props.setTopoFoto([`https://www.poppytecnologias.com.br/api_bolando/images/${el.url}`])} 
                 src={`https://www.poppytecnologias.com.br/api_bolando/images/${el.url}`}>
                  
                 </ImageThumbs>
                 }
            
                </>)
                  
                })}
             {props.countBanco-1 >0 ?  <div style={{cursor: 'pointer'}} onClick={()=> props.setCountBanco(props.countBanco -1)}> anterior</div> : ''}
        {props.countBanco + 1 < props.listPhotos.length? <div style={{cursor: 'pointer'}} onClick={()=> props.setCountBanco(props.countBanco +1)}>proximo</div>:''}
                </>
            :''}
          
        </ContainerOptions>
        </>
    )
}

export default ListImages