import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import HuddleLogo from "../../images/logo.svg"
import { sizes } from "../../utils/sizes"

const StyledHeaderWrapper = styled.div`
  width: 100vw;
  height: 15vh;
  margin: 0;
  padding: 0;
  z-index: 1;
`
const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  max-width: ${sizes.maxWidth};
  margin: 2.5rem auto 0;

  @media (max-width: 767px) {
    width: 80%;
    margin-top: 2rem;
  }
`
const StyledLogoImg = styled.img`
  width: 15vw;
  min-width: 7.75rem;
`
const Header = ({ siteTitle }) => (
  <StyledHeaderWrapper>
    <StyledHeader>
      <Link to="/">
        <StyledLogoImg src={HuddleLogo} alt={siteTitle} />
      </Link>
    </StyledHeader>
  </StyledHeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Huddle Landing Page`,
}

export default Header
