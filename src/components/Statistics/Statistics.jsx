import PropTypes from 'prop-types';
import { getRandomColor } from 'components/utils/getRandomColor';
import css from 'components/Statistics/Statistics.module.css';
import {Section, StatTitle, StatList} from 'components/Statistics/Statistics.styled'

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <StatTitle>{title}</StatTitle>

      <StatList className={css.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.item}
            style={{
              backgroundColor: getRandomColor(),
            }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
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
    }),
  ),
};
