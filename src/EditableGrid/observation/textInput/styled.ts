/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const BaseInput = styled(Form.Control)`
  border: 1px solid #D1D1D1;
  height: 32px;
  color: #676767;
  font-size: 12px;
  font-weight: bold;
  &:focus {
    box-shadow: 0 0 0 0.15rem rgb(13 110 253 / 25%);
  }

  ${({ tablecell }) => !!tablecell && `
     height: 48px;
     border: 0;
  `}

`;

export const InvalidInput = styled(Form.Control)`
  border: 1px solid #FF0000;
  height: 32px;
  color: #676767;
  font-size: 12px;
  font-weight: bold;
  &:focus {
    box-shadow: 0 0 0 0.15rem rgb(13 110 253 / 25%);
  }

  ${({ tableCell }) => !!tableCell && `
     height: 48px;
     border: 0;
  `}
`;
