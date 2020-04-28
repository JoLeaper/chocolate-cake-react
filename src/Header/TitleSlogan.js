import React, { Component } from 'react'
import './BottomBorder.css'
import logo from '../lab-assets/logo.png'
import './TitleSlogan.css'

export default class TitleSlogan extends Component {
    render() {
        return (
            <div className='title-slogan'>
                <img alt='restaurant-logo' src={logo} />
                <div className='title-slogan-text'>
                    <p>Delicious</p>
                    <p>THE BEST FOOD BLOG ON THE WEB</p>
                </div>

            </div>
        )
    }
}
