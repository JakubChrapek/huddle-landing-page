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
  box-shadow: 6px 6px 12px 2px rgba(0, 0, 0, 0.5);
  border: 1px solid ${colors.primary};
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.65);
    color: ${colors.primaryHover};
  }
`

const Button = ({ btnText }) => <StyledButton>{btnText}</StyledButton>

export default Button
