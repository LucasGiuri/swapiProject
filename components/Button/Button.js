import PropTypes from 'prop-types';
import { Btn } from './Button.styles';

const Button = ({text, isDisabled, onClick}) => {
  const onClickButton = () => {
    if (!isDisabled) {
      onClick();
    }
  };

  return (
    <Btn onClick={onClickButton} isDisabled={isDisabled}>{text}</Btn>
  )
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  isDisabled: false,
  onClick: () => {}
};

export default Button;