import React from "react"
import styled from "styled-components"
import { FaFacebookF, FaSmileWink, FaInstagram } from "react-icons/fa"
import colors from "../../utils/colors"

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
  transition: transform 0.2s ease-in-out, border-color .2s ease-in-out;

  :last-child {
    margin-right: 0;
  }

  :hover {
    border: 1px solid #00ef8b;
  }

  :hover svg {
    fill: #00ef8b; 
    transform: scale(1.2);
  }

  svg {
    vertical-align: middle;
    width: 0.9rem;
    height: 0.9rem;
    fill: white;
    transition: fill 0.2s ease-in-out, transform .2s ease-in-out;
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
        <a href="https://www.facebook.com/kryptonum"><FaFacebookF /></a>
      </StyledIcon>
      <StyledIcon>
        <a href="https://kryptonumstudio.com/en/kryptonum-studio/"><FaSmileWink /></a>
      </StyledIcon>
      <StyledIcon>
        <a href="https://instagram.com/kryptonum.studio"><FaInstagram /></a>
      </StyledIcon>
    </StyledIconList>
  </FooterWrapper>
)

export default Footer
