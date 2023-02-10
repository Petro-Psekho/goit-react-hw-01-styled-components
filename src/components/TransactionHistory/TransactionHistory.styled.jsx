import styled from '@emotion/styled';

export const TransHistoryTable = styled.table`
  margin: 0 auto 100px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  border-spacing: 0;
`;

export const TableHeader = styled.thead`
  background-color: #0cbad1;
  color: #d4f8f8;
`;

export const TableHeaderRow = styled.tr`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const TableHeaderItem = styled.th`
  padding: 15px 0;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  background-color: ##d4f8f8;
`;

export const TableData = styled.tr`
  :nth-of-type(2n) {
    background-color: #ecf1f4;
  }
`;

export const TableDataItem = styled.td`
  padding: 10px 70px 10px 70px ;
  text-transform: capitalize;
  color: #656a6e;
  border-right: 1px solid #e7e7e7;
  }
`;

export const TableDataItemCurrency = styled.td`
  padding: 10px 70px 10px 70px ;
  text-align: center;
  color: #656a6e;
  border-right: 1px solid #e7e7e7;
  }
`;
