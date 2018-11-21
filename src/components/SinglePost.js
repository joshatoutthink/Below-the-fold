import React, { Component } from 'react'
import { Link,} from 'gatsby'
import styled from 'styled-components'



export default class SinglePost extends Component {
  render() {
      const { edge } = this.props
    return (
      <Post>
            <li key={edge.node.slug}>
                <div>
                    <Link to={`/${edge.node.slug}`}><h3>{edge.node.title}</h3></Link>
                     <img src={edge.node.featured_media.source_url} alt={edge.node.slug} />
                    <div dangerouslySetInnerHTML={{
                        __html: edge.node.excerpt
                    }} />
                </div>
            </li>
      </Post>
    )
  }
}


const Post = styled.div`
    padding:20px 0 25px;
    margin:20px 0px;
    display:block;
    position:relative;
    li{
        list-style:none;
        img{
            max-width:100%;
            box-shadow:0 2px 4px #c8aaa6;
        }
        h3{   
            display:inline-block;
            position:relative;
            padding-top:15px;
            margin:5px 0 10px;
            text-transform:titlecase;
            color:#000;
            transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
            &:hover{
                  color:#3a405a;
            }
            &:before{
            left:0;
            top:0;
            content:"";
            display:block;
            width:30%;
            height:5px;
            background:#c8aaa6;
            transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);
            position:absolute;
      }
            &:hover{
                  &:before{
                        width:60%;
                  }
            }
        }
        p{
            font-family:baskerville;

        }
    }

`;

/* $theme - blue: #3a405a;
$theme - pink: #c8aaa6;
$theme - light - green: #edffed;
$theme - green: #b0c4b1;
$theme - white: #fffafc;
$theme - black: #1d1d1d; */