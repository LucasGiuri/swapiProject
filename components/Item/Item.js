import { ItemContainer } from './Item.styles';
import PropTypes from 'prop-types';

const Item = ({children}) => <ItemContainer>{children}</ItemContainer>;

Item.propTypes = {
  children: PropTypes.node
};

export default Item;