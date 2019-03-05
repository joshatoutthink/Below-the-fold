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
    } = this.props.data.wordpressPage
    return (
      <ThemeProvider theme={theme}>
        <Layout pageSlug={slug}>
          <PageSingle>
            <h1>{title}</h1>
            {featured_media && (
              <img src={featured_media.source_url} alt={title} />
            )}
            <div
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </PageSingle>
        </Layout>
      </ThemeProvider>
    )
  }
}
const PageSingle = styled.div`
  margin-top: 60px;
  h1 {
    color: ${props => props.theme.black};
  }
`

export const PAGE_QUERY = graphql`
  query PAGE_QUERY($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      content
      slug
      featured_media {
        source_url
      }
    }
  }
`
