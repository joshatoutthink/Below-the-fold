import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Layout from '../components/layout'
import theme from '../components/styles/themeStyles'

export default class post extends Component {
  render() {
    const {
      title,
      featured_media,
      content,
      slug,
    } = this.props.data.wordpressPost
    return (
      <ThemeProvider theme={theme}>
        <Layout pageSlug={slug}>
          <PostSingle>
            <h1>{title}</h1>
            <img src={featured_media.source_url} alt={title} />
            <div
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </PostSingle>
        </Layout>
      </ThemeProvider>
    )
  }
}
const PostSingle = styled.div`
  margin-top: 60px;
  h1 {
    color: ${props => props.theme.black};
  }
`

export const POST_QUERY = graphql`
  query POST_QUERY($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
      slug
      featured_media {
        source_url
      }
    }
  }
`
