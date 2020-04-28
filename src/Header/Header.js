import React, { Component } from 'react'
import TitleSlogan from './TitleSlogan.js';
import SocialMedia from './SocialMedia.js';
import BottomBorder from './BottomBorder.js';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
        <div>
            <div className='Header'>
                <TitleSlogan />
                <SocialMedia />
            </div>
            <div>
                <BottomBorder />
            </div>
        </div>
        )
    }
}
