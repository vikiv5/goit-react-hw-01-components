import styled from 'styled-components';

export const Container = styled.div`
width:600px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
list-style: none;
padding-left: 0;
margin: 0 auto;
padding: 10px;
background-color: beige;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
  margin-top: 20px;
  
`;

export const UserInfo = styled.ul`
  list-style: none;
  display: flex;
padding :0;
`;

export const Tag = styled.p`
  justify-content: center;
  display: flex;
  color: violet;
`;

export const Location = styled.p`
  justify-content: center;
  display: flex;
  color: green;
`;

export const Img = styled.img`
  padding-left: 15px;
`;

export const SpanInfo = styled.span`
  margin-bottom: 5px;
  color: black;
`;
export const SpanQuantity = styled.span`
  font-weight: 800;
  display: flex;
  justify-content: center;
`;

export const LiInfo = styled.li`
padding: 15px 15px;
width: calc(100% / 3);
:not(:last-child) {
border-right: 1px solid black;
}
`;