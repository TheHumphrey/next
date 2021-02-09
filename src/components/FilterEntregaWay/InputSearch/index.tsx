import React, { ReactElement } from 'react';

import FormControl from 'react-bootstrap/FormControl';

import InputSearchStyle from './style';

const InputSearch = (): ReactElement => {
  return (
    <>
      <InputSearchStyle>
        <div className="inputContainer">
          <FormControl className="input" placeholder="Pesquisar..." aria-describedby="inputGroup-sizing-default" />
        </div>
      </InputSearchStyle>
    </>
  );
};

export default InputSearch;
