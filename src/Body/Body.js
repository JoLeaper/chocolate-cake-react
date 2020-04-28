import React, { Component } from 'react'
import AuthorInfo from './AuthorInfo.js'
import IngredientList from './IngredientList.js'
import BottomBorder from '../Header/BottomBorder.js'
import ArticleText from './ArticleText.js'
import ArticlePicture from './ArticlePicture.js'
import picture from '../lab-assets/choco-pizza.png'
import ArticleTitle from './ArticleTitle.js'
import ArticleMetaInfo from './ArticleMetaInfo.js'
import ArticlePrintButton from './ArticlePrintButton.js'

export default class Body extends Component {
    render() {
        return (
            <div>
                <ArticleTitle />
                <ArticleMetaInfo />
                <ArticlePrintButton />
                <ArticlePicture pic={picture}/>
                <ArticleText />
                <IngredientList />
                <BottomBorder />
                <AuthorInfo />
            </div>
        )
    }
}
