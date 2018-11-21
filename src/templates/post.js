import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Sidebar from '../components/Sidebar';
import Layout from '../components/layout'

export default class Page extends Component {
    render() {
        const { data } = this.props
        return (
            <Layout>
                <PageLayout>
                    <Main>
                        <h2>{data.wordpressPost.title}</h2>
                        <img src={data.wordpressPost.featured_media.source_url} alt="title of post or something"></img>
                        <div dangerouslySetInnerHTML={{
                            __html: data.wordpressPost.content
                        }} /> 
                    </Main>
                    <Side>
                        <Sidebar />
                    </Side>
                </PageLayout>
            </Layout>
        )
    }
}

const PageLayout = styled.div`
  display:flex;
  max-width:1100px;
  flex-flow:wrap;
  margin:0 auto;
  justify-content:space-between;
`;
const Main = styled.main`
  margin-top:50px;
  max-width:65%;
  min-width:450px;
  @media(max-width:768px){
    max-width:100%;
    min-width:100%;
  }
    h2{   
      display:inline-block;
      position:relative;
      padding-top:15px;
      margin:5px 0 10px;
      text-transform:titlecase;
      color:#000;
      transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
        &:before{
          left:0;
          top:0;
          content:"";
          display:block;
          width:50%;
          height:5px;
          background:#c8aaa6;
          transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position:absolute;
        }
  }`

const Side = styled.aside`
  max-width:30%;
  min-width:200px;
  margin-left:20px;
  @media(max-width:768px){
    max-width:75%;
    margin:50px auto 0;
  }
`;

export const query = graphql`
  query PostQuery($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      slug
      content
      featured_media{
        source_url
      }
    }
  }
`