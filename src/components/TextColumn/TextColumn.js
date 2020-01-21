import React from "react"
import styled from "styled-components"

const StyledColumn = styled.div`
  width: 42.5%;
  align-self: flex-start;
  margin-top: 5rem;
  h2 {
    text-transform: capitalize;
    font-size: 2.1rem;
    line-height: 3.4rem;
    letter-spacing: -0.2px;
    margin: 0;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.35rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
  }
`

const TextColumn = ({ children }) => <StyledColumn>{children}</StyledColumn>

export default TextColumn
