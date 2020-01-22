import PropTypes from 'prop-types';
import { Img } from './Image.styles';

const Image = ({isLogo, url, alt, onClick}) => (
  <Img src={url} alt={alt} isLogo={isLogo} onClick={onClick} />
);

Image.propTypes = {
  isLogo: PropTypes.bool,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Image.defaultProps = {
  isLogo: false,
  onClick: () => {}
};

export default Image;