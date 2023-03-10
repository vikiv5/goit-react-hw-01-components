import PropTypes from 'prop-types'
import { Table, TableBody, Thead,PaymentsDetails,TransactionList , TableTD} from "./TransactionHistory.styled";

export const TransactionHistory= ({items})=>
{
    return (
        <Table>
  <Thead>
    <TransactionList>
      <PaymentsDetails>Type</PaymentsDetails>
      <PaymentsDetails>Amount</PaymentsDetails>
      <PaymentsDetails>Currency</PaymentsDetails>
    </TransactionList>
  </Thead>

  {items.map((item) => (
                <TableBody key={item.id}>
                    <TransactionList type = {item.type}>
                    <TableTD>{item.type}</TableTD>
                    <TableTD>{item.amount}</TableTD>
                    <TableTD>{item.currency}</TableTD>
                    </TransactionList>
                </TableBody>
            ))}
        </Table>
    )
};

TransactionHistory.propTypes ={
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
}
