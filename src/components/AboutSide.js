import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import LinkStyles from './styles/LinkStyles'

const AboutSide = () => (
  <StaticQuery
    query={graphql`
      query ABOUT_QUERY {
        wordpressPage(slug: { eq: "about" }) {
          title
          content
          slug
          featured_media {
            source_url
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.wordpressPage.featured_media && (
          <img
            src={data.wordpressPage.featured_media.source_url}
            alt={data.wordpressPage.title}
          />
        )}
        <div style={{ margin: '0 20px' }}>
          <Link to={`/${data.wordpressPage.slug}`}>
            <h4>
              <LinkStyles>About Caroline</LinkStyles>
            </h4>
          </Link>
          <div
            dangerouslySetInnerHTML={{
              __html: data.wordpressPage.content,
            }}
          />
        </div>
      </div>
    )}
  />
)
export default AboutSide
