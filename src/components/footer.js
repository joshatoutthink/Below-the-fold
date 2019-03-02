import React, { Component } from 'react'
import styled from 'styled-components'



export default class footer extends Component {
  render() {
    return (
      <MainStyle>
        <div className="center">
          copyright belowlafold.com 2019
        </div>
      </MainStyle>
    )
  }
}
const MainStyle = styled.div`
background:#c8aaa6;
padding:20px;
color:#102644;
`