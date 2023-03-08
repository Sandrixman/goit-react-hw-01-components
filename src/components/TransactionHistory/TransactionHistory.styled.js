import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin: auto;
  width: 600px;
  text-align: center;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background: #3fafff;
  color: #fff;
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  font-size: 13px;
  :nth-of-type(even) {
    background: #fff;
  }
`;

export const TableHeader = styled.th`
  border: 1px solid #bebebe;
  padding: 20px 70px;
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  border: 1px solid #bebebe;
  padding: 20px 70px;
  :nth-of-type(1) {
    text-transform: capitalize;
    text-align: start;
  }
`;
