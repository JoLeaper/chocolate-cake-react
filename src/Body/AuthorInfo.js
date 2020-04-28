import React, { Component } from 'react'
import AuthorPhoto from '../lab-assets/van-pic.png'
import TitleMinor from './TitleMinor.js'
import ShortDesc from './ShortDesc.js'
import ShareButton from './ShareButton.js'
import './AuthorShare.css'

const author = 'Vanessa Stevenson';
const authorDesc = 'Food enthusiast, photography fan. Add a pinch of raw foodism and that\'s pretty much who I am.'

export default class AuthorInfo extends Component {

    render() {
        return (
            <div className="author-info">
                <img src={AuthorPhoto} alt="Vanessa Stevenson"></img>
                <div className="author-text">
                    <TitleMinor title={author}/>
                    <ShortDesc desc={authorDesc}/>
                </div>
                <ShareButton name={'SHARE RECIPE'} />
            </div>
        )
    }
}
