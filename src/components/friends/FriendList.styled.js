import styled from "styled-components";


export const Box = styled.ul`
    width:600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding-left: 0;
    margin: 0 auto;
    padding: 10px;
    background-color: grey;
`;

export const Friend = styled.li`
    width: 380px;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
   
    background-color: white;
`;

export const Img = styled.img`
    display: block;
    margin-right: 15px;
`;
export const Name = styled.p`
    font-size: 20px;
    font-weight: 500;
`;
export const OnlineFriend = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 15px;
    background-color: ${props => {
        switch(props.isOnline) {
            case true:
            return 'green';
            case false:
            return 'red';
            default:
            return 'orange'
        }
    }};
`;