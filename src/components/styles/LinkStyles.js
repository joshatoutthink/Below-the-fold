import styled from 'styled-components'

const LinkStyles = styled.span`
  *{   
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
  }
`
export default LinkStyles