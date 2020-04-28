import React, { Component } from 'react'
import './AuthorShare.css'

export default class ShareButton extends Component {
    render() {
        return (
            <div>
                <button className="share-button">{this.props.name}</button>
            </div>
        )
    }
}
