import styled from "styled-components";


export const Table = styled.table`
   
    width: 600px;
    margin: 50px auto;
    padding: 10px;
    text-align: center;
    border: 1px solid black;
`;

export const TableBody = styled.tbody`
    font-size: 13px;
    font-weight: 500;
    color: #2f2f2f;
    letter-spacing: 1px;

    padding: 10px;
    border:1px solid black; ;
    
`;

export const Thead = styled.thead `
   
    padding: 10px;
    border: 1px solid black;
  
`;
export const PaymentsDetails = styled.th `
   
   padding: 10px;
    border: 1px solid black;
    width: 33%;
    background-color: #fff;
`;

export const TableTD = styled.td `
   
   padding: 10px;
    border: 1px solid black;
    width: 33%;
`;

export const TransactionList = styled.tr`
    background-color: ${props => {
    switch(props.type) {
        case 'invoice':
        return 'lila';
        case "payment":
        return 'violet';
        case "withdrawal":
        return 'grey';
        case "deposit":
        return 'beige';
        default:
        return 'red'
    }
    }};
    
`;