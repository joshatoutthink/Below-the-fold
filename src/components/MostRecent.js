import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import LinkStyles from './styles/LinkStyles'

const MostRecentStyle = styled.div`
  padding:20px;
`
const MostRecentListStyle = styled.ul`
  margin:0px;
  padding:0px;
  list-style:none;
  
`

const MostRecent =()=>(
  <StaticQuery 
    query={
      graphql`
        query MOST_RECENT_QUERY{
          allWordpressPost{
            edges{
              node{
                title
                slug
              }
            }
          }
        }
      `
    }
    render={({ allWordpressPost:{edges}})=>(
      <MostRecentStyle>
      <h4 style={{paddingTop:'10px'}}>Most Recent</h4>
      <MostRecentListStyle>{edges.map(({node})=>(
        
        <li key={node.slug}><LinkStyles><Link to={`/${node.slug}`}>
          {console.log(node)}
          {node.title}</Link></LinkStyles></li>
      ))}</MostRecentListStyle>
    
    </MostRecentStyle>
    )}
  />
)
export default MostRecent