import styled, {keyframes} from "styled-components";


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
export const Container = styled.div`
border-top: 1px solid white;
border-bottom: 1px solid white;
color: white;
padding-top: 20px;
margin-top: 20px;
padding-bottom: 20px;
margin-bottom: 20px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;
export const Excluir = styled.div`
cursor: pointer;
display: flex;
font-size: 16px;
justify-content: center;
`;

export const ContainerSelect = styled.div`
margin-top: 20px;
display: flex;
gap: 10px;
align-items: center;


flex-wrap: wrap;
`;
