import React, { Component } from 'react'
import print from '../lab-assets/print-icon.png'

export default class ArticlePrintButton extends Component {
    render() {
        return (
            <div>
                <img src={print} alt="print button" />
                <p>PRINT</p>
            </div>
        )
    }
}
