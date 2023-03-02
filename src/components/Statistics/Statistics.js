import PropTypes from 'prop-types';

import {
  StatisticsInfo,
  Title,
  StatList,
  StatItem,
  StatLabel,
  Percentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsInfo>
      <Title>{title}</Title>

      <StatList>
        {stats.map(statItem => (
          <StatItem key={statItem.id}>
            <StatLabel>{statItem.label}</StatLabel>
            <Percentage>{statItem.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsInfo>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
