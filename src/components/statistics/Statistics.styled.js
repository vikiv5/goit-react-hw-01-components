import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const Title = styled.h2`
  color: black;
  font-weight: 400;
`;

export const ColorsList = styled.ul`
  list-style: none;
  display: flex;
`;

export const Color = styled.li`
  background-color: pink;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.span`
  color: white;
`;

export const Percentage = styled.span`
  margin-top: 5px;
  color: white;
`;

export const Wrapper = styled.div`
background-color: grey;
display: flex;   
flex-direction: column;    
align-items: center;
width:500px;
`