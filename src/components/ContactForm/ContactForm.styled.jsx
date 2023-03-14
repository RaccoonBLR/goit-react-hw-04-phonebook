import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;

  :last-of-type {
    margin-bottom: 24px;
  }
`;

export const Input = styled.input`
  width: 300px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 4px;
  border-bottom: 1px solid grey;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 94px;
  padding: 4px 18px;
  border: 1px solid grey;
  border-radius: 4px;
`;
