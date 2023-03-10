import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  flex-direction: column;
  
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
  column-gap: 15px;
  width: 210px;
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
  display: flex;
  flex-direction: column;
`;