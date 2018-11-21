import React, { Component } from 'react'
import styled from 'styled-components'

import PostIndex from './PostsIndex'
import AboutBlock from './AboutBlock'

export default class Sidebar extends Component {
  render() {
    return (
      <>
       <AboutBlock  /> 
       <PostIndex />
      </>
    )
  }
}

    
  