import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Sidebar from '../components/Sidebar';

export default class Page extends Component {
    render() {
        const { data } = this.props
        return (
            <Layout>
                <PageLayout>
                    <Main>
                        <h2>{data.wordpressPage.title}</h2>
                        <img src={data.wordpressPage.featured_media.source_url} />
                        <div dangerouslySetInnerHTML={{
                            __html: data.wordpressPage.content
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
`
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
  query PageQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
      featured_media{
          source_url
      }
    }
  }
`