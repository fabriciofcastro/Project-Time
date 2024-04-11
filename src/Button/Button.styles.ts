import styled from 'styled-components';

export type ButtoinVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonCOntainerProps {
  variant: ButtoinVariant
}

export const ButtonVariant = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonCOntainerProps>`

  width: 100px;
  height: 40px;
  margin: 0 2rem;
  border-radius: 0.5rem;

  background-color: ${({theme}) => theme.primary };
  color: ${({theme}) => theme.white};
`