import React from "react"
import styled from "styled-components"

const StyledColumn = styled.div`
  width: 42.5%;
  z-index: 1;
  @media (max-width: 767px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 2rem auto;
    align-items: center;
  }

  h2 {
    text-transform: capitalize;
    font-size: 2.1rem;
    line-height: 3.4rem;
    letter-spacing: -0.2px;
    margin: 0;

    @media (max-width: 1040px) {
      margin-top: 1.5rem;
      font-size: 1.8rem;
      line-height: 2.6rem;
    }

    @media (max-width: 870px) {
      font-size: 1.6rem;
      line-height: 2.3rem;
    }

    @media (max-width: 767px) {
      margin-top: 1rem;
      font-size: 1.45rem;
      line-height: 2.15rem;
      text-align: center;
      letter-spacing: 0;
    }
  }

  p {
    font-size: 0.95rem;
    line-height: 1.35rem;
    font-weight: 400;
    letter-spacing: 0.05rem;

    @media (max-width: 1040px) {
      font-size: 0.85rem;
      line-height: 1.25rem;
    }

    @media (max-width: 870px) {
      font-size: 0.8rem;
      line-height: 1.2rem;
    }

    @media (max-width: 767px) {
      font-size: 0.9rem;
      line-height: 1.3rem;
      text-align: center;
    }
  }
`

const TextColumn = ({ children }) => <StyledColumn>{children}</StyledColumn>

export default TextColumn
