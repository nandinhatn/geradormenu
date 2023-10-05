import styled, {keyframes} from "styled-components";

import Foto from '../../assets/img/produtos/IMG_3841.JPG';
export const opacitys = keyframes`
0%{
    opacity:100%;
    transform: rotate(360g);
}
100%{
    opacity: 0%;

}

`
export const ContainerOptionsLayout = styled.div`

margin-top: 20px;
margin-bottom: 20px;
color: white;
padding-top: 20px;
padding-bottom: 20px;
border-top: 2px solid white;
border-bottom: 2px solid white;
`;

export const ImageLogo = styled.img`
width: ${(props)=> props.length + 'px'};
height: ${(props)=> props.length + 'px'};
width: ${(props)=> props.rect? 2 * props.length +'px'   : props.length + 'px'};

transition: width 1s, height 1s , border-radius 1s;
margin-bottom: 20px;

`;

export const ContainerConfigs = styled.div`
display: flex;
flex-direction: ${(props)=> props.configs==='column'?'column':'row'};

`;

export const Container = styled.div`
width: 680px;

background-color: gray;
display: flex;
flex-direction: column;




background-position: right bottom;
${({imageBack, colorBack})=> !imageBack && `
background: ${colorBack};
`}
${({imageBack, chooseImage})=> imageBack && `
background: url(${chooseImage});
`}


background-size: cover;

object-fit: cover;
 








`;

export const Itens = styled.div`
display: flex;

/* background-color: rgba(237, 241,237, 0.7); */

justify-content: left;
font-size: ${(props)=> props.size + 'px'};

font-family: ${(props)=> props.font};

font-weight: bolder;
margin-top: 10px;
padding: 5px;
color: ${props => props.color};


`;


export const ContainerImage = styled.div`
padding: 20px;
display: flex;
// se o layout 1 - ele tem um tamanho
// tem uma imagem de background que pode ser as imagens 
border: 1px solid red;
background-size: cover;
background-repeat: no-repeat;
height: ${(props)=> props.configs==='row' ? '100%' : ''};


justify-content:  ${(props)=> props.positionLogo };


${({layout, fotos, lenght})=> layout==="layout1" && `
background: url(${fotos});
background-size: cover;
background-repeat: no-repeat;
background-position:center;
margin-bottom : 40px;




height: ${lenght};
`}

${({layout, fotos, lenght, configs})=> configs==="column" && `
height: 100%';
`}

${({layout, fotos, lenght})=> layout==="layout2" && `
background: url(${fotos[0]}),url(${fotos[1]});
background-size:  50% 100%;
background-repeat: no-repeat;
background-position: left center , right center;
margin-bottom : 40px;

`}

${({layout, fotos, lenght,columns, configs})=> layout==="layout2" && configs==='row' && `
background: url(${fotos[0]}),url(${fotos[1]});
background-size:  100% 50%;
background-repeat: no-repeat;
background-position: top center , bottom center;
margin-bottom : 40px;


`}

${({layout, fotos, lenght})=> layout==="layout5" && `
background: url(${fotos[0]}),url(${fotos[1]}),url(${fotos[2]});
background-size: 33% 250px, 33% 250px,33% 250px;
background-repeat: no-repeat;
background-position: left center , center, right center;
margin-bottom : 40px;






`}
${({layout, fotos, length})=> layout==="layout6" && `
background: url(${fotos[0]}),url(${fotos[1]}),url(${fotos[2]}),url(${fotos[3]}),url(${fotos[4]}),url(${fotos[5]});
background-size: 34% 50%;
background-repeat: no-repeat;

background-position: left top ,center top, right top , left bottom, center bottom, right bottom ;
margin-bottom : 40px;






`} 
${({layout, fotos, lenght, configs})=> layout==="layout4" && configs==='row' && `
background: url(${fotos[0]}),url(${fotos[1]});
background-size: 50px , 50px ;

background-position: left , right ;
margin-bottom : 40px;
border: 1px solid black;
border-radius : none;
border-bottom-left-radius: none;
  border-bottom-right-radius: none;


`}

${({layout, fotos, lenght})=> layout==="layout4" && `
background: url(${fotos[0]}),url(${fotos[1]});
background-size:  50% 100%;
background-repeat: no-repeat;
background-position: left center , right center;
margin-bottom : 40px;


border-bottom-left-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;



`}
${({layout, fotos, lenght})=> layout==="layout3" && `
background: url(${fotos});
background-size: cover;
background-repeat: no-repeat;
background-position:center;
margin-bottom : 40px;
  border-bottom-left-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;


height: ${lenght};
`}

${({layout, fotos, lenght, configs})=> layout==="layout3" && configs==='row' && `
background: url(${fotos});
background-size: cover;
background-repeat: no-repeat;
background-position:center;

border-radius:  0  60% 60% 0;




height: ${lenght};
`}



background-color:${(props)=> props.background};
height:100%;
align-items:center;
`

;
export const ContainerImage1 = styled.div`
padding: 0;
position: relative;



justify-content:  ${(props)=> props.positionLogo };
`;
export const ImagesBack = styled.img`
width: 210px;
height: ${(props)=> props.length/2+ 'px'};
object-fit: cover;

`;
export const ContainerLogo = styled.div`
 position: absolute;
${({positionLogo})=> positionLogo ==="center" && `
 

 margin: 0 50%;


`}

justify-content:  ${(props)=> props.positionLogo };
`
export const ContainerTopo = styled.div``;

export const ContainerImages = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
height: ${(props)=> props.lenght};

background-color: ${(props)=> props.background};
`;
export const ItensDescription= styled.div`
color: ${(props)=> props.color};
font-size: ${(props)=> props.size + 'px'};
font-family: 'Roboto', sans-serif;
margin-top: 5px;
margin-left: 20px;
`;

export const ContainerMenu= styled.div`

display: grid;
grid-template-columns: 4fr 1fr 1fr ;
border-bottom: 1px solid gray;
margin-left: 20px;
`;

export const ContainerTotal = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;



gap: 20px;
`;
export const Containers = styled.div`
display: flex;
flex-direction: column;

`;

export const ContainerItensTotal = styled.div`
padding: 10px 20px 10px 20px;
background: rgba(255, 255, 255, 0.7);
border-radius: 20px 10px 0px 20px;
margin-bottom: 20px;
margin-left: 20px;
margin-right: 20px;
display: flex;

align-items: center;


`;

export const Options = styled.div`
background: rgba(238,238,222, 0.1);

min-height: 0px;
padding: 20px;
margin-top: 10px;
margin-bottom: 10px;
display: flex;

justify-content: center;
width: 220px;





flex-direction: column;
color:black;
font-family: 'Roboto', sans-serif;
border-radius: 20px;

`;

export const MenuOptions = styled.div`
display: flex;
flex-direction: column;

background-color: rgba(101, 102, 98, 0.23);
padding: 20px;



position: absolute;
z-index: 99;
right: 0;


width: 280px;
height: 94vh;
overflow-y: auto;




`;


export const ContainerMenuInner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;


`;


export const ContainerOptions = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 10px;
margin-top: 10px;

`;

export const ImageThumbs = styled.img`
width:40px;
height: 40px;
object-fit: cover;
cursor: pointer;
`;

export const TitleMenu = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: bold;
text-align: center;
color: white;
display: flex;
justify-content: left;
align-items: center;
gap: 10px;
margin-top: 20px;

`;

export const ContainerFooter = styled.div`
background-color: ${(props)=> props.colorFooter};
color: white;
padding: 20px;
display: flex;
flex-direction: row;
justify-content: space-around;
color: black;
font-family: ${(props)=> props.font};
font-size: ${(props)=> props.sizeFooter + "px"};
color: ${(props)=> props.textColorFooter};
font-weight: bold;
`;

export const ExibMenu = styled.div`
height: ${(props)=> props.height + 'px'};
opacity: ${(props)=> props.display};
transition: all 1s ease, opacity 1s linear;
transition: opacity 2s delay 5s;






`;
export const ExibMenuTotal = styled.div`
height: ${(props)=> props.height + '%'};
width: 100%;
padding: 20px;
opacity: ${(props)=> props.display};
transition: all 1s ease, opacity 1s linear;
transition: opacity 2s delay 5s;
`;



export const ImgProd = styled.img`
width: ${(props)=> props.lenght + 'px'};
height: ${(props)=> props.lenght + 'px'};
border : 3px solid ${(props)=> props.border};

border-radius: 50%;
object-fit: cover;
display: ${(props)=> props.exib ? 'block' : 'none'};
transition: display 1s ease;
`;

export const ContainerProd = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

gap: 20px;

`

export const ContainerProdTotal = styled.div`
display: flex;
justify-content: space-between;

align-items: center;

border-bottom: 1px solid gray;
width: 480px;
padding: 20px;

`;

export const Input = styled.input`
border: 1px solid gray;
background-color: gray;
color: #333130;
font-weight: bold;
margin-top: 10px;
font-size: 14px;
`;
export const ContainerThumbs = styled.div`
display: flex;
gap:20px;
margin-top: 20px;

`

export const TopoImage = styled.div`
display: flex;




`;
export const ImageTopo= styled.div`
display: flex;

background-color: red;
width:135px;
height: 150px;

margin-bottom: 20px;



`
