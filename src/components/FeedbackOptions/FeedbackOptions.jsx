import PropTypes from 'prop-types';
import { BtnList, Button } from './FeedbackOptions.styled';

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnList>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </BtnList>
  );
}