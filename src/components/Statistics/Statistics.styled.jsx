import styled from '@emotion/styled';
import { getRandomColor } from 'components/utils/getRandomColor';

export const Section = styled.section`
  text-align: center;
  width: 500px;
  margin: 0 auto 50px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const StatTitle = styled.h2`
  text-transform: uppercase;
  padding: 40px 0;
  color: #2e4054;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatListItem = styled.li`
  width: 100px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  background-color: ${props => getRandomColor()};
`;

export const StatListLabel = styled.span`
  font-weight: 400;
  text-transform: lowercase;
  color: #f5f5f5;
`;

export const StatListPercentage = styled.span`
  font-size: 30px;
  font-weight: 600;
  color: #f5f5f5;
`;
