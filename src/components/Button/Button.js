import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"

const StyledButton = styled.button`
  display: inline-block;
  max-width: 180px;
  min-width: 160px;
  border-radius: 2rem;
  background-color: ${colors.white};
  color: ${colors.primary};
  font-size: 1rem;
  padding: 0.9rem 1.5rem;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.3);
  border: 1px solid ${colors.primary};
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;

  @media (max-width: 1040px) {
    font-size: 0.85rem;
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 767px) {
    font-size: 0.75rem;
    max-width: 15rem;
    padding: 0.75rem 4.4rem;
    margin-top: 0.5rem;
  }

  :hover {
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.3);
    color: ${colors.primaryHover};
  }
`

const Button = ({ btnText }) => <StyledButton>{btnText}</StyledButton>

export default Button
