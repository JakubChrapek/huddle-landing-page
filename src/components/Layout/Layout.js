import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header/Header"
import styled, { createGlobalStyle } from "styled-components"
import { colors } from "../../utils/colors"
import Footer from "../Footer/Footer"
import Background from "../Background/Background"
import { gsap, TweenMax, TimelineLite, Power3 } from "gsap/dist/gsap"

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
    @media (max-width: 767px) {
    max-height: unset;
    overflow: unset;
  }
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5,h6, button {
    font-family: 'Poppins', sans-serif;
  }
`
const StyledWrapper = styled.div`
  visibility: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary};
  @media (max-width: 767px) {
    height: unset;
  }
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

  let landing = useRef(null)
  let main = useRef(null)
  let tl = new TimelineLite()

  useEffect(() => {
    let hero = main.children[0].firstElementChild
    let footer = main.children[1]
    let footerIcons = footer.children[0].children
    let heroImage = hero.children[0]
    let heroText = hero.children[1]

    TweenMax.set([heroImage, heroText], { css: { visibility: "hidden" } })
    TweenMax.to(landing, 0, { css: { visibility: "visible" } })
    tl.from(main, 1.2, { opacity: 0, ease: Power3.easeOut }, -0.6)
      .to([heroImage, heroText], 0, {
        css: { visibility: "visible" },
      })
      .from(heroImage, 0.8, { opacity: 0, x: -50 })
      .staggerFrom(heroText.children, 0.8, { opacity: 0, x: 50 }, 0.2, 1.8)
      .staggerFrom(footerIcons, 0.2, { opacity: 0, y: 70 }, 0.2, 2.6)
  })

  return (
    <StyledWrapper ref={el => (landing = el)}>
      <GlobalStyle />
      <Background />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div ref={el => (main = el)}>
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
