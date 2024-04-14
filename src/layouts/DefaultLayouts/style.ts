import styled from "styled-components";

export const LayoutContainer = styled.div `
  max-width: 90rem;
  height: max-content;
  margin: 8rem auto;
  padding: 4rem;
  border-radius: 8px;


  background-color: ${({theme}) => theme['gray-800']};
  display: flex;
  flex-direction: column;
`