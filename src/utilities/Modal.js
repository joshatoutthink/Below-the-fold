import React, { Component } from 'react'
import Portal from './Portal'
import styled from 'styled-components'
import Icon from './Icon'

export default class Modal extends Component {
  render() {
      const { children, on, toggle} = this.props;
    return (
        <Portal >
            {on &&
            <ModalWrapper>
                    <Card>
                        <CloseButton onClick={toggle}>
                            <Icon name='close'/>
                        </CloseButton>
                        {children}
                    </Card>
                    <Background onClick={toggle}/>
            </ModalWrapper>
            }
        </Portal>
    )
  }
}

const ModalWrapper= styled.div`
    transition:all .3s ease-in;
    position:fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    z-index:999;
    `
const Card = styled.div`
    position:relative;
    max-width:50%;
    background-color:white;
    display:flex;
    align-items:center;
    border-top:5px solid #102644;
    margin-bottom:100px;
    height:100%;
    padding:25px;
    border-radius:0px;
    box-shadow:0px 10px 50px rgba(200, 170, 166,.1), 0 0 5px rgba(200, 170, 166,.1);
    z-index:1000;
`
const Background = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    opacity:.5;
    height:100%;
    background:#c8aaa6;

`
const CloseButton = styled.button`
    position:absolute;
    background:transparent;
    left:0;
    padding:25px;
    border:none;
    top:0;
`
    

