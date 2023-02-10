import PropTypes from 'prop-types';

import {
  Section,
  StatTitle,
  StatList,
  StatListItem,
  StatListLabel,
  StatListPercentage,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <StatTitle>{title}</StatTitle>

      <StatList>
        {stats.map(stat => (
          <StatListItem key={stat.id}>
            <StatListLabel>{stat.label}</StatListLabel>
            <StatListPercentage>{stat.percentage}</StatListPercentage>
          </StatListItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
