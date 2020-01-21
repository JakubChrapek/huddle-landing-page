import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/Seo"
import TwoColSection from "../components/TwoColSection/TwoColSection"
import Mockups from "../images/illustration-mockups.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TwoColSection img={Mockups}>Test</TwoColSection>
  </Layout>
)

export default IndexPage
