import React from "react"
import styled from "styled-components"

import TextColumn from "../TextColumn/TextColumn"
import Button from "../Button/Button"

import { sizes } from "../../utils/sizes"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: calc(75vh - 9rem);
  max-width: ${sizes.maxWidth};
  margin: 7rem auto 2rem;

  @media (max-width: 1040px) {
    height: calc(75vh - 5rem);
    margin: 4rem auto 1rem;
  }

  @media (max-width: 870px) {
    height: calc(75vh - 3rem);
    margin: 2.5rem auto 0.5rem;
  }

  @media (max-width: 767px) {
    width: 80%;
    height: unset;
    flex-direction: column;
    margin: 3rem auto 1.5rem;
  }
`

const StyledImg = styled.img`
  width: 52.5%;
  z-index: 2;
  @media (max-width: 767px) {
    width: 100%;
  }
`

const TwoColSection = ({ img }) => (
  <StyledWrapper>
    <StyledImg src={img} alt="Huddle mockups" />
    <TextColumn>
      <h2>
        Build the community
        <br />
        your fans will love
      </h2>
      <p>
        Huddle re-imagines the way we build communities. You have a voice, but
        so your audience. Create connections with your users as you engage in
        genuine discussion.
      </p>
      <Button btnText="Register" />
    </TextColumn>
  </StyledWrapper>
)

export default TwoColSection
