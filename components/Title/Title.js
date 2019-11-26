import PropTypes from 'prop-types';
import { Text } from './Title.styles';

const Title = ({ text, centered, isBold, isSmall }) => (
  <Text isBold={isBold} centered={centered} isSmall={isSmall}>{text}</Text>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  centered: PropTypes.bool,
  isBold: PropTypes.bool,
  isSmall: PropTypes.bool
};

Title.defaultProps = {
  isSmall: false,
  isBold: false,
  centered: false
};

export default Title;