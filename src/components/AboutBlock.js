import React, { Component } from 'react'

import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const AboutBlock = ()=> (
  <StaticQuery
    query={graphql`
        query aboutBLockQuery {  
            wordpressPage(slug:{eq:"about-caroline"}){
                title
                content
                featured_media{
                    source_url
                }
            }
        }   
    `}
    render= {data=>(
    
      <MainStyle>
         <AboutPhoto src=  {data.wordpressPage.featured_media.source_url}/>
        <div style={{padding:'25px'}}>
        
            <Name>{data.wordpressPage.title}</Name>
        

        <div 
                dangerouslySetInnerHTML={{
                    __html: data.wordpressPage.content
                }}
        ></div>
        </div>
      </MainStyle>
    
)}
  />
)
export default AboutBlock

const AboutPhoto = styled.img`
max-width:100%;

`
const Name = styled.h4`
    line-height:1.2rem;
    margin-bottom:20px;
    `
const MainStyle = styled.div`
    margin-top:50px;
    border-top:5px solid #3a405a;
    background:white;
    box-shadow:0 2px 4px #c8aaa6;
    
   
`;