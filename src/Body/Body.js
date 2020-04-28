import React, { Component } from 'react'
import AuthorInfo from './AuthorInfo.js'
import IngredientList from './IngredientList.js'
import BottomBorder from '../Header/BottomBorder.js'

export default class Body extends Component {
    render() {
        return (
            <div>
                {/* <ArticleTitle />
                <ArticleMetaInfo />
                <ArticlePrintButton />
                <ArticlePicture />
                <ArticleText />
                 */}
                <IngredientList />
                <BottomBorder />
                <AuthorInfo />
            </div>
        )
    }
}
