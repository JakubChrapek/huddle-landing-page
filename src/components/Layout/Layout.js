import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header/Header"
import styled, { createGlobalStyle } from "styled-components"
import { colors } from "../../utils/colors"
import Footer from "../Footer/Footer"
import Background from "../Background/Background"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Poppins:400,700&display=swap');
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: ${colors.primary};
    color: ${colors.white};
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    font-size: 18px;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5,h6, button {
    font-family: 'Poppins', sans-serif;
  }
`
const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary};
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledWrapper>
      <GlobalStyle />
      <Background />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </StyledWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
