import React, { Component } from 'react'
import Header from './Header/Header.js'
import Body from './Body/Body.js'
import Footer from './Footer/Footer.js'
import './App.css'



export default class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>

    )
  }
}
