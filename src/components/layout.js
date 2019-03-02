import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import HeaderBarHome from './HeaderBarHome'
import HeaderBar from './HeaderBar';
import Footer from './footer'
import AboutSide from './AboutSide'
import MostRecent from './MostRecent'
import './layout.css'
import './styles.css'

const LayoutStyles = styled.div`
  display:grid;
  max-width:1100px;
  margin:0 auto;
  grid-gap:30px;
  grid-template-columns:minmax(350px, 1fr) minmax(270px, 350px);
  @media(max-width:700px){
    grid-template-columns:100%;
  }
  .sidebar{
    padding-top:40px;
    padding-right:20px;
    .sidebar-child{
      width:100%;
      background:#efefef;
      border-top:5px solid #c8aaa6;
      box-shadow:0 2px 4px #c8aaa6;
      margin: 40px 0;
      h4{
        color:#3a405a;
      }
    }
  }
`

const Layout = (props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
       <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {props.pageSlug === '/' ? <HeaderBarHome
          siteTitle={data.site.siteMetadata.title}
        />: <HeaderBar/>}
        <LayoutStyles>
          <div
            style={{
              margin: '0 auto',
              maxWidth: '960px',
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {props.children}
          </div>
          <div className="sidebar">
            <div className="sidebar-child">
              <AboutSide/>
            </div>
            <div className="sidebar-child">
              <MostRecent />
            </div>
          </div>
        </LayoutStyles>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
