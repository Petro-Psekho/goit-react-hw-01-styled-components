import PropTypes from 'prop-types';

import {
  TransHistoryTable,
  TableHeader,
  TableHeaderRow,
  TableHeaderItem,
  TableBody,
  TableData,
  TableDataItem,
  TableDataItemCurrency,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransHistoryTable>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderItem>Amount</TableHeaderItem>
          <TableHeaderItem>Type</TableHeaderItem>
          <TableHeaderItem>Currency</TableHeaderItem>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableData key={id}>
            <TableDataItem>{type}</TableDataItem>
            <TableDataItem>{amount}</TableDataItem>
            <TableDataItemCurrency>{currency}</TableDataItemCurrency>
          </TableData>
        ))}
      </TableBody>
    </TransHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
