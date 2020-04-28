import React, { Component } from 'react'

export default class ArticlePicture extends Component {
    render() {
        return (
            <div>
                <img src={this.props.pic} alt="chocolate pizza"/>
            </div>
        )
    }
}
