import styled from 'styled-components'


export const HomerContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5.6rem;

  }

`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  color: ${({theme}) => theme['gray-100']};
  font-size: 1.4rem;
  font-weight: bold;
  flex-wrap: wrap;
`

export const CountContainer = styled.div`
  width: 100%;
  font-family: 'Roboto Mono', monospace;
  line-height: 10rem;
  font-size: 12rem;
  border-radius: 8px;
  color: ${({theme}) => theme['grey-100']};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;

    span {
      background-color: ${({theme}) => theme['gray-700']};
      padding: 3rem 1.6rem;
      border-radius: 8px;
    }

`
const BaseInput = styled.input`
  background-color: transparent;
  height: 3rem;
  border: 0;
  border-bottom: .2rem solid ${({theme}) => theme['gray-500']};
  border-top: 0 solid transparent;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 1rem;
  color: ${({theme}) => theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${({theme}) => theme['green-500']};
  }

  &::placeholder {
    color: ${({theme}) => theme['gray-100']};
  }
 
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

    &::-webkit-calendar-picker-indicator {
      display: none !important;
    }
    

`



export const MinutesAmountInput = styled(BaseInput)`
`

export const Separator = styled.div `
  padding: 3rem 0;
  overflow: hidden;
  color: ${({theme}) => theme["green-500"]};
  width: 5rem;
  display: flex;
  justify-content: center;
`

export const ButtonStartCount = styled.button`
  background-color: ${({theme}) => theme['green-500']};
  color: ${({theme}) => theme['gray-100']};;
  width: 100%;
  border: 0;
  padding: 1.2rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: .8rem;
  font-weight: bold;

  cursor: pointer;

  transition: 600ms ease;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled)hover {
      background-color: ${({theme}) => theme['green-700']};
    }

`