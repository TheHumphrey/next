import React, { ReactElement } from 'react';

import Form from 'react-bootstrap/Form';

import ButtonTableStyle from './style';

const ButtonTable = (): ReactElement => {
  return (
    <>
      <ButtonTableStyle>
        <div className="buttonContainer">
          <Form.Check type="switch" id="custom-switch" label="Alterar formato da tabela" />
        </div>
      </ButtonTableStyle>
    </>
  );
};

export default ButtonTable;
