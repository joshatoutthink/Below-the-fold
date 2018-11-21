import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'


const Menu = () => (
    <StaticQuery
        query={graphql`
      query modalMenuQuery{
        allWordpressCategory{
          edges{
            node{
              name
              slug
            }
          }
        }
      }
    `}
        render={data => (
            <ul className="modal-menu-menu-list">
                {data.allWordpressCategory.edges.map((edge, index) => (
                    <li key={index}>
                        <Link to={`/${edge.node.slug}`}><NavLink>{edge.node.name}</NavLink></Link>
                    </li>
                ))}
            </ul>
        )}
    />
)
export default Menu

const NavLink = styled.span`
    display:inline-block;
    position:relative;
    padding-top:10px;
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
        height:3px;
        background:#c8aaa6;
        transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);
        position:absolute;
        }
        &:hover{
            &:before{
                width:60%;
            }
        }
    
`
