import styled from "styled-components";


export const ItensProducts = styled.div`
display: grid;
grid-template-columns: 1fr  4fr 1fr;
font-family: 'Roboto', sans-serif;
border-bottom: 1px solid gray;
padding: 5px;
`;

export const ImageLogo = styled.img`
width:120px;
height: 120px;
border-radius: 100px;
margin-bottom: 20px;
`;

export const ContainerImageLogo = styled.div`
display: flex;
justify-content: center;
`;

export const Title = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: bold;
color: #532539;

padding: 10px;
border-radius: 10px;
display: flex;
justify-content: center;

margin-bottom: 20px;
margin-top: 10px;

`;

export const Container = styled.div`
display: flex;
margin: auto;
flex-direction: column;
background-color: rgba(227,219,193, 0.85);
padding: 20px;
border-radius: 20px;
width: 50%;
`;

export const ContainerItens= styled.div`
margin-bottom: 20px;
`;

export const TextNoContent = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 14px;
padding: 20px;
color: #532539;
font-weight: bold;
text-align: center;
`;
