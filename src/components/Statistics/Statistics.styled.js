import styled from '@emotion/styled';

export const StatisticsInfo = styled.section`
  width: 400px;
  text-align: center;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
`;

export const Title = styled.h2``;
export const StatList = styled.ul`
  display: flex;
`;
export const StatItem = styled.li`
  background: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;
export const StatLabel = styled.span`
  font-size: 18px;
`;
export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
