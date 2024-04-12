import styled from "styled-components";

export const LayoutContainer = styled.div `
  max-width: 100rem;
  height: calc(100vh - 24rem);
  margin: 8rem auto;
  padding: 4rem;


  background-color: ${({theme}) => theme['gray-800']};
  display: flex;
  flex-direction: column;
`