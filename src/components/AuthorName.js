import React, { Component } from 'react'
import Link from 'next/link';
import styled from 'styled-components'


export default class authorName extends Component {
    state = {
        authorName: [],
        authorID:[]
    }
    async componentDidMount() {
        const authorRes = await fetch(
            this.props.author
        )

        const authorInfo = await authorRes.json()
        const authorName = authorInfo.name
        const authorID = authorInfo.id
        this.setState({ authorName, authorID })
    }
  
    render() {
    return (
      <Link
            href={`/wp/v2/posts?author=${this.state.authorID}`}
            /* href={`wp/v2/posts?author=${this.state.authorID}`} */
            as={`/wp/v2/posts?author=2`}
      >
        
            <AuthorTag>by:<span> {this.state.authorName}</span></AuthorTag>
      </Link>
    )
  }
}
const AuthorTag = styled.a`
    display: block;
    margin-bottom:25px;
    span{
        color:#c8aaa6;
        text-transform:uppercase;
   }
   
`;