import { Link } from 'gatsby'
import React, { Component } from "react";

export default class HeaderBar extends Component {
   
    render() {
        return (
          <div className='logobar--small'>
                <div className='logobar__contents'>
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




