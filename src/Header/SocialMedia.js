import React, { Component } from 'react'
import './SocialMedia.css'
import fbIcon from '../lab-assets/fb-icon.png'
import twitIcon from '../lab-assets/twit-icon.png'
import gpIcon from '../lab-assets/gp-icon.png'
import instaIcon from '../lab-assets/insta-icon.png'
import flicIcon from '../lab-assets/flic-icon.png'
import pintIcon from '../lab-assets/pint-icon.png'

import mailIcon from '../lab-assets/mail-icon.png'
import rssIcon from '../lab-assets/rss-icon.png'



export default class SocialMedia extends Component {
    render() {
        return (
            <div className='button-container'>
                <div className='social-media'>
                    <img alt='facebook icon button' src={fbIcon}></img>
                    <img alt='twitter icon button' src={twitIcon}></img>
                    <img alt='google plus icon button' src={gpIcon}></img>
                    <img alt='instagram icon button' src={instaIcon}></img>
                    <img alt='flic icon button' src={flicIcon}></img>
                    <img alt='pinterest icon button' src={pintIcon}></img>
                </div>
                <div className='sharing-button'>
                    <img alt='mail icon button' src={mailIcon}></img>
                    <img alt='rss icon button' src={rssIcon}></img>
                </div>
            </div>
        )
    }
}
