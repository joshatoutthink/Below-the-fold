import { Link } from 'gatsby'
import React, { Component, Fragment } from "react";
import styled from 'styled-components';
import Sticky from 'react-sticky-el';
import Menu from './Menu';
/* import ModalMenuIcon from './modalMenuIcon';
import Toggle from '../utilities/Toggle'
import Modal from '../utilities/Modal'
import ModalMenu from './ModalMenu' */


export default class HeaderBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: [],
            sticky: 'relative',
            bodyPadding: 0,
            node: '',
        }
    }
    
    handleScroll = () => {
        console.log(window.scrollY)
        if (window.scrollY > 0) {

            this.setState({
                sticky: 'fixed',
                bodyPadding: `${this.state.height}px`,

            })
            this.containerNode.nextSibling.style.marginTop = this.state.bodyPadding
            this.containerNode.parentNode.style.paddingTop = '.1px' 

        } else {
            this.setState({
                sticky: 'relative',
                 bodyPadding: 0, 
            })
            this.containerNode.nextSibling.style.marginTop = this.state.bodyPadding
            this.containerNode.parentNode.style.paddingTop = '0px' 
        }
    }
    saveRef = (ref) => this.containerNode = ref
    render() {
      



        return (
            <Sticky stickyClassName='stickyOn' className='stickyNav' style={{ color:'red!important', zIndex:999}}>
                <div className='logobar'>
                    <Link
                        to={'/'}
                    >
                        <h1 className='logoType' >Below <span>la</span> Fold</h1> 
                    </Link>
                    <div>
                      <Menu/>  
                    </div>
                   <div>
                        {/* <Toggle>
                            {({ toggle, on }) => (
                                <Fragment>
                                    <ModalMenuIcon toggle={toggle}/>
                                    <Modal on={on} toggle={toggle}>
                                        <ModalMenu/>
                                    </Modal>
                                </Fragment>
                            )}
                        </Toggle> */}
                    </div> 
                </div>
            </Sticky>
        )
    }

}



/* const StickyNav = styled.div`
   LogoBar{
       transition:all 2s ease;
      display:flex;
      flex-flow:column;
      align-items:center;
       position:fixed; 
      justify-content:space-between;      
      background:#fffafc;
      padding: 25px 60px  10px;
      

      a{
            text-decoration:none;
            display:inline-block;
            color:#3b334c;
            transition:all .14s ease-in;
            margin:0 30px 0 0 !important;
            &:last-child{
                  margin-right:0 !important;
            }
            &:hover{
                  color:#000;
            }
           
      }
   }
   
   h1{   
        color:#3b334c;
      padding-top:25px;

      position:relative;
      font-weight:100;
      
      transition:transform .14s ease-in;
      
      &:before{
            left:35%;
            top:0px;
            content:"";
            display:block;
            width:30%;
            height:5px;
            background:#3b334c;
            position:absolute;
            transition: all .28s cubic-bezier(0.165, 0.84, 0.44, 1);
            
            
      }
      &:hover{
            transform: scale(1.01);
            &:before{
                  background:#c8aaa6;
                  top:100%;
                  width:100%;
                  left:0;
                  
            }
      }
    }
    &.stickyOn{
        color:red;
    } 
      
` */
const LogoBar = styled.div`
    /*  transition:all 2s ease;
      display:flex;
      flex-flow:column;
      align-items:center;
       position:fixed; 
      justify-content:space-between;      
      background:#fffafc;
      padding: 25px 60px  10px;
      

      a{
            text-decoration:none;
            display:inline-block;
            color:#3b334c;
            transition:all .14s ease-in;
            margin:0 30px 0 0 !important;
            &:last-child{
                  margin-right:0 !important;
            }
            &:hover{
                  color:#000;
            }
           
      }*/
      
`