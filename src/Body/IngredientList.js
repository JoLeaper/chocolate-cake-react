import React, { Component } from 'react'
import data from '../data/data.js'
import './Ingredients.css'

export default class IngredientList extends Component {
    render() {
        return (<div className='ingredients-list'>
        {data.map((item) => (
            <label><input type='checkbox'></input>{item}</label>
        
        ))}
        </div>);
    }
}
