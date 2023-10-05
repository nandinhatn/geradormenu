import { styled } from "styled-components";


export const Options = styled.div`
background: rgba(238,238,222, 0.1);

padding: 20px;
margin-top: 10px;
margin-bottom: 10px;
display: flex;
justify-content: center;
width: 220px;



flex-direction: column;
color:white;
font-family: 'Roboto', sans-serif;
border-radius: 20px;

`;

export const MenuOptions = styled.div`
display: flex;
flex-direction: row;
width: 200px;
background-color: rgba(255, 255, 255, 0.1);
padding: 20px;

justify-content: center;
position: absolute;
right: 0;


flex-wrap: wrap;


`;
export const TitleMenu = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 12px;
font-weight: bold;
text-align: center;
color:  white;
`;
export const ImageThumbs = styled.img`
width:40px;
height: 40px;
object-fit: cover;
cursor: pointer;
`;


export const ContainerOptions = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 10px;
margin-top: 10px;

`;
export const ContainerColors = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;

`;