import React from "react"
import styled from "styled-components"

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  h2 {
    text-transform: capitalize;
    font-size: 2.5rem;
    line-height: 3.6rem;
    letter-spacing: -1px;
    margin: 0;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.4rem;
    font-weight: 400;
    letter-spacing: 0.04rem;
  }
`

const TextColumn = ({ children }) => <StyledColumn>{children}</StyledColumn>

export default TextColumn
