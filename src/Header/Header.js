import React, { Component } from 'react'
import TitleSlogan from './TitleSlogan.js';
import SocialMedia from './SocialMedia.js';
import BottomBorder from './BottomBorder.js';

export default class Header extends Component {
    render() {
        return (
            <div>
                <TitleSlogan />
                <SocialMedia />
                <BottomBorder />
            </div>
        )
    }
}
