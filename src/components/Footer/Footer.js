import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 10vh;
  max-width: 1240px;
  margin: 0 auto;
  width: 90%;

  @media (max-width: 767px) {
    justify-content: center;
    height: unset;
    margin: 0 auto 2.5rem;
  }
`

const StyledIconList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
  @media (max-width: 767px) {
    margin: 0;
    padding: 0;
  }
`

const StyledIcon = styled.li`
  border: 1px solid white;
  border-radius: 50%;
  padding: 0.3rem;
  margin-right: 0.8rem;
  width: 2rem;
  height: 2rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  :last-child {
    margin-right: 0;
  }

  :hover {
    transform: scale(1.03);
  }
  svg {
    vertical-align: middle;
    width: 0.9rem;
    height: 0.9rem;
  }

  @media (max-width: 767px) {
    width: 1.65rem;
    height: 1.65rem;
    padding: 0.2rem;
    margin-right: 0.6rem;

    svg {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
`
const Footer = () => (
  <FooterWrapper>
    <StyledIconList>
      <StyledIcon>
        <FaFacebookF />
      </StyledIcon>
      <StyledIcon>
        <FaTwitter />
      </StyledIcon>
      <StyledIcon>
        <FaInstagram />
      </StyledIcon>
    </StyledIconList>
  </FooterWrapper>
)

export default Footer
