import react, {useState, useContext, useRef, useEffect} from 'react';


import {
    ContainerOptions,
    ImageThumbs

} from './style'
import { FaTrashRestoreAlt } from 'react-icons/fa';


const ListImages = (props)=>{
 

  function teste(valor){
    props.setTopoFoto(valor)

  }
    return(
        <>
        <div>Imagem dos Produtos Selecionados</div>
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
                onClick={()=> props.setTopoFoto([...props.topoFoto,`https://www.poppytecnologias.com.br/api_bolando/images/${el.url_image}`])} 
                src={`https://www.poppytecnologias.com.br/api_bolando/images/${el.url_image}`}></ImageThumbs> 
                
                :    
               
               
               ''}
               
               
               </>  : 
               
               
               <ImageThumbs
               width={50} 
               onClick={()=> props.setTopoFoto([`https://www.poppytecnologias.com.br/api_bolando/images/${el.url_image}`])} 
               src={`https://www.poppytecnologias.com.br/api_bolando/images/${el.url_image}`}></ImageThumbs>
               }
          
              </>)
                
              })}
        
              </>
          :''}
        
      </ContainerOptions>
        </>
    )
}

export default ListImages