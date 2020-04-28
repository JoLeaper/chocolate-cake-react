import React, { Component } from 'react'
import './Ingredients.css'

export default class IngredientList extends Component {
    render() {
        return (
            <div className="ingredients-list">
                <ul class="list-left">
                    <li>1 1/2 cups milk</li>
                    <li>1/2 cup marscaponek</li>
                    <li>1/2 tsp pink salt</li>
                    <li>1 lb Black Mision Figs</li>
                    <li>1/2 cup brown sugar</li>
                    <li>2-4 tbsp water</li>
                </ul>
            </div>
        )
    }
}
