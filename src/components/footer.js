import React, { Component } from 'react'
import styled from 'styled-components'

import Menu from './ModalMenu';

export default class footer extends Component {
  render() {
    return (
      <MainStyle>
        <Menu/>
      </MainStyle>
    )
  }
}
const MainStyle = styled.div`
background:#c8aaa6;
color:#102644;
`