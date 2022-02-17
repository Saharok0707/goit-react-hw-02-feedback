import { InitialMessage } from './Notification.styled';
import PropTypes from 'prop-types';

Notification.propTypes = {
  message: PropTypes.string,
};

export default function Notification({ message }) {
  return <InitialMessage>{message}</InitialMessage>;
}