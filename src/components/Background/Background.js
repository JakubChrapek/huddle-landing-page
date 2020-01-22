import React from "react"
import Media from "react-media"

import DesktopBg from "../../images/bg-desktop.svg"
import MobileBg from "../../images/bg-mobile.svg"
import styled from "styled-components"

const StyledDesktopBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${DesktopBg});
  background-position: 10% center;
  background-size: cover;
  background-repeat: no-repeat;
`

const StyledMobileBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100vw;
  height: 65vh;
  background-image: url(${MobileBg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Background = () => {
  return (
    <div>
      <Media query={{ maxWidth: 767 }}>
        {matches => (matches ? <StyledMobileBg /> : <StyledDesktopBg />)}
      </Media>
    </div>
  )
}

export default Background
