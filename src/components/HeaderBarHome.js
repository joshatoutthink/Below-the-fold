import { Link } from 'gatsby'
import React, { Component } from "react";

export default class HeaderBarHome extends Component {
   
    render() {
        return (
            <div style={{ color:'red!important', zIndex:999}}>
                <div className='logobar'>
                    <Link
                        to={'/'}
                    >
                        <h1 className='logoType' >Below <span>la</span> Fold</h1> 
                    </Link>
                    <div>

                    </div>
                </div>
            </div>
        )
    }

}




