import React from 'react';
import { ButtonStyle, ButtonWrapper } from './Button.Styled';
import PropTypes from 'prop-types';
const Button = ({ onClick }) => {
  return (
    <ButtonWrapper>
      <ButtonStyle type="button" onClick={onClick}>
        Load more...
      </ButtonStyle>
    </ButtonWrapper>
  );
};

export default Button;
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
