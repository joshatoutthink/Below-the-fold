import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export default class SinglePost extends Component {
  render() {
    const { post } = this.props
    console.log(post.excerpt.length)

    return (
      <Post>
        <li>
          <div>
            <Link to={`/${post.slug}`}>
              <h3>{post.title}</h3>
            </Link>
            <img src={post.featured_media.source_url} alt={post.slug} />
            <div
              dangerouslySetInnerHTML={{
                __html: post.excerpt,
              }}
            />
          </div>
        </li>
      </Post>
    )
  }
}

const Post = styled.div`
  padding: 20px 0 25px;
  margin: 20px 0px;
  display: block;
  position: relative;
  li {
    list-style: none;
    img {
      max-width: 100%;
      ${({ theme }) => theme.boxShadow};
    }
    h3 {
      display: inline-block;
      position: relative;
      padding-top: 15px;
      margin: 5px 0 10px;
      text-transform: capitalize;
      color: ${props => props.theme.black};
      ${({ theme }) => theme.barTransition}
      &:hover {
        color: #000;
      }
      &:before {
        left: 0;
        top: 0;
        content: '';
        display: block;
        width: 30%;
        height: 5px;
        background: ${({ theme }) => theme.rust};
        ${({ theme }) => theme.barTransition};
        position: absolute;
      }
      &:hover {
        &:before {
          width: 60%;
        }
      }
    }
    p {
      font-family: baskerville;
    }
  }
`
