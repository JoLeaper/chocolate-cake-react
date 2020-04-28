import React, { Component } from 'react'
import './Footer.css';

export default class Copyright extends Component {
    render() {
        return (
            <div>
                <p className='copyright'>Delicious © 2013 · All Rights Reserved.</p>
                <p className='copyright'>Proudly published with Ghost.</p>
            </div>
        )
    }
}
