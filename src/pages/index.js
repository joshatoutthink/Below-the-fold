import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SinglePost from '../components/SinglePost'




export default class index extends Component {
  render() {
    console.log(this.props.data)
    return (
      <Layout pageSlug={'/'}>
        {this.props.data.allWordpressPost.edges.map(edge=>(
          <SinglePost key={edge.node.slug} post={edge.node}/>
        ))}
      </Layout>
    )
  }
}


export const query = graphql`
  query PostsIndexQuery{
	allWordpressPost{
    edges{
      node{
        title
        excerpt
        featured_media{
         source_url
        }
        slug
      }
    }
  }
  
}
` 

