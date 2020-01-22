import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchContainer, Input, ButtonContainer } from './InputSearch.styles';
import Button from '../Button/Button';

const inputSearch = ({placeholder, onSearch, onReset}) => {
  const [ isDisabled, setDisabledStatus ] = useState(true);
  const [ inputValue, setInputValue ] = useState('');

  const onChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    setDisabledStatus(value.length > 1 ? false : true);
  };

  const onClickSearch = () => {
    onSearch(inputValue);
  };

  const onClickReset = () => {
    setInputValue('');
    setDisabledStatus(true);
    onReset();
  };

  return (
    <SearchContainer>
      <Input type="text" placeholder={placeholder} value={inputValue} onChange={onChange} />
      <ButtonContainer>
        <Button text={"Search"} onClick={onClickSearch} isDisabled={isDisabled} />
        <Button text={"Reset"} onClick={onClickReset} isDisabled={isDisabled} />
      </ButtonContainer>
    </SearchContainer>
  )
};

inputSearch.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  onReset: PropTypes.func
};

inputSearch.defaultProps = {
  placeholder: '',
  onSearch: () => {},
  onReset: () => {}
};

export default inputSearch;
