import PropTypes from 'prop-types';
import { PaginationContainer, TitleContainer, ButtonContainer } from './Pagination.styles';
import Button from '../Button/Button';
import Title from '../Title/Title';

const Pagination = ({totalPages, hasPrevPage, hasNextPage, onClickPrev, onClickNext}) => (
  <PaginationContainer>
    <TitleContainer>
      <Title text={totalPages} />
    </TitleContainer>
    <ButtonContainer>
      <Button isDisabled={!hasPrevPage} onClick={onClickPrev} text={"Previous"} />
      <Button isDisabled={!hasNextPage} onClick={onClickNext} text={"Next"} />
    </ButtonContainer>
  </PaginationContainer>
);

Pagination.propTypes = {
  totalPages: PropTypes.string.isRequired,
  hasPrevPage: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  hasNextPage: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  onClickPrev: PropTypes.func,
  onClickNext: PropTypes.func
};

Pagination.defaultProps = {
  hasPrevPage: false,
  hasNextPage: false,
  onClickPrev: () => {},
  onClickNext: () => {}
};

export default Pagination;