import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'



const PostsIndex =()=> (
   
   <StaticQuery 
        query={graphql`
        query postIndexQuery {
            allWordpressPost(limit:5) {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `}
        render={ data=>(
            <Posts>
                <h4>Recent Posts</h4>
                <ul>
                    {data.allWordpressPost.edges.map((edge, index)=>(
                        <li key={index} style={{listStyle:'none'}}>
                            <Link to={`/${edge.node.slug}`} >
                                <Post>{edge.node.title}</Post>
                            </Link>
                        </li>    
                    ))}
                </ul>
            </Posts>
        )}
    />
)
export default PostsIndex  
     
const Post = styled.p`
    display: block;
    font-family:'pt_monoregular', 'monospace';
    margin-bottom:15px;
    position: relative;
    padding-top:5px;
    &:before{
        left:0%;
        top:0px;
        content:"";
        display:block;
        width:0%;
        height:3px;
        background:#c8aaa6;
        position:absolute;
        transition: width .2s cubic-bezier(0.075, 0.82, 0.165, 1)  , left .2s ease-out .1s;
 }
 &:hover{
     color:#3a405a;
    &:before{
        width:15%;
        left:0;
    }
    }
`
const Posts = styled.div`
    box-shadow:0 2px 4px #c8aaa6;
    padding:20px;
    background:white;
    margin-top:30px;
    border-top:5px solid #3a405a;
    margin:0;
    margin-top:60px;
`


