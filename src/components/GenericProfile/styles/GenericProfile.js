import styled from 'styled-components'

export const Container = styled.div`
min-width : 20em;
display : flex;
flex-direction : column;
flex-wrap : wrap;
border : 1px solid black;
padding : 1em;`;
export const Name = styled.p`
`;
export const Header = styled.div`
display: flex;
justify-content : space-between;
font-size : 16px;
font-weight : 700;`;
export const Image = styled.div`
width : 5em;
height : 5em;
img{
    width : 90%;
    height : 90%;
    object-fit : cover;
}`;
export const TitleText = styled.p`
font-size : 14px;
font-weight : 700;`;
export const Text = styled.p`
font-size : 14px;`;
export const Group = styled.div`
display : flex;
flex-direction : column;
justify-content : space-between;
align-items : center;
`;
export const Frame = styled.div`
width : 100%;
display : flex;
justify-content : space-between;
align-items : center;`;