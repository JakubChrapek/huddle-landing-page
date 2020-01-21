import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import HuddleLogo from "../../images/logo.svg"
import { sizes } from "../../utils/sizes"

const StyledHeaderWrapper = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: ${colors.primary};
  margin: 0;
  padding: 0;
`
const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  max-width: ${sizes.maxWidth};
  margin: 1.75rem auto 2.25rem;
`
const StyledLogoImg = styled.img`
  width: 15vw;
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
