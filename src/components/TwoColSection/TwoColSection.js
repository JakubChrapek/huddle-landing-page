import React from "react"
import styled from "styled-components"

import TextColumn from "../TextColumn/TextColumn"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 2rem auto 0.5rem;
`

const StyledImg = styled.img`
  width: 55%;
`

const TwoColSection = ({ img }) => (
  <StyledWrapper>
    <StyledImg src={img} alt="Huddle mockups" />
    <TextColumn>
      <h2>Build the community your fans will love</h2>
      <p>
        Huddle re-imagines the way we build communities. You have a voice, but
        so your audience. Create connections with your users as you engage in
        genuine discussion.
      </p>
      <button>Register</button>
    </TextColumn>
  </StyledWrapper>
)

export default TwoColSection
