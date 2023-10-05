import react from 'react';

import {ContainerOptions, ImageThumbs,Container, Excluir, 
ContainerSelect} from './style'

const ImagensSelecionadas = (props)=>{
    return(
        <>
        <Container>

        <div>Imagens selecionadas</div>
        {props.topoFoto && props.topoFoto.length>=0 ? <>
        <ContainerSelect>

        {props.topoFoto.map((el,i)=>{
            return(
                <>
              
                <Excluir onClick={()=> props.removeImage(i)}>x</Excluir>
                <ImageThumbs width={50} src={el}/>
                </>
            )
        })}
        </ContainerSelect>
        </>: ''}

        </Container>
        </>
    )
}
export default ImagensSelecionadas