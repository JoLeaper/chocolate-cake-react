import React, { Component } from 'react'
import Copyright from './Copyright.js';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div>
                    <hr className='small-logo'></hr>
                </div>
                
                <Copyright />
            </div>
        )
    }
}
