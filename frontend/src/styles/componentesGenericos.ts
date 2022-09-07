import styled from 'styled-components';

export const Button = styled.button`
  font-weight: 600;
  background-color: rgb(255, 255, 255);
  padding: 0.3em 0.5em;
  box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.05);
  border-radius: 0.2em;
  margin: 0 0.5em;

  :hover {
    cursor: pointer;
    background-color: rgb(230, 230, 255);
  }

  :active {
    transform: translateY(0.1em);
  }
`;

export const Input = styled.input`
  padding: 0.3em 0.5em;
  box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.05);
  border-radius: 0.2em;
  width: 8em;
  text-align: center;

  :invalid {
    border: 1px solid red;
  }
`;

export const Select = styled.select`
  padding: 0.3em 0.5em;
  box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.05);
  border-radius: 0.2em;
  text-align: center;
  width: 9em;
`;

export const Label = styled.label``;
