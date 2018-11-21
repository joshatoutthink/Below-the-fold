import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'


import Layout from '../components/layout'
import SinglePost from '../components/SinglePost'
import Sidebar from '../components/Sidebar';


export default class index extends Component {
    render() {
        return (
            <Layout>
                <PageLayout>
                    <Main>
                        <ul style={{ margin: '0', padding: 0 }}>
                            {this.props.data.allWordpressPost.edges.map((edge) => {
                                return (
                                    <SinglePost edge={edge} />
                                )
                            })}
                        </ul>
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
  query ArchiveQuery($slug: String!) {
    allWordpressPost(filter: {categories: {elemMatch:{slug:{eq:$slug}}} } ){
        edges {
            node {
                title
                slug
                featured_media{
                    source_url
                }
                excerpt
            }
        }
    }
  }
` 