import React, { Component } from 'react'

export default class ShortDesc extends Component {
    render() {
        return (
            <div>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}
