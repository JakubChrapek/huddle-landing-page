import React, { useRef, useEffect } from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/Seo"
import TwoColSection from "../components/TwoColSection/TwoColSection"
import Mockups from "../images/illustration-mockups.svg"
import { TweenMax } from "gsap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TwoColSection img={Mockups}>Test</TwoColSection>
  </Layout>
)

export default IndexPage
