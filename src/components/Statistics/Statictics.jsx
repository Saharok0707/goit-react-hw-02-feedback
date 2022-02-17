import { StatisticsList, StatisticsListItem } from './Statistics.styled';
import PropTypes from 'prop-types';

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) {
  return (
    <StatisticsList>
      <StatisticsListItem>Good: {good}</StatisticsListItem>

      <StatisticsListItem>Neutral: {neutral}</StatisticsListItem>

      <StatisticsListItem>Bad: {bad}</StatisticsListItem>

      <StatisticsListItem>Total: {total}</StatisticsListItem>
      <StatisticsListItem>
        Positive feedback: {positiveFeedbackPercentage} %
      </StatisticsListItem>
    </StatisticsList>
  );
}