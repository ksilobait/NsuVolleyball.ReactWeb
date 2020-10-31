import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export class HomeSidebar extends Component {
    static propTypes = {
        switchPage: PropTypes.func.isRequired // from Home
    }

    state = {
    }
    
    render() {
        return (
            <Fragment>
                <button onClick={() => { this.switchPage(1) }}> Игры </button>
                <button onClick={() => { this.switchPage(2) }}> Новости </button>
                <button onClick={() => { this.switchPage(3) }}> Галерея </button>
                <button onClick={() => { this.switchPage(4) }}> Ком??? </button>
                <button onClick={() => { this.switchPage(5) }}> Тренировк??? </button>
                <button onClick={() => { this.switchPage(6) }}> Контакты </button>
            </Fragment>
        )
    }

    switchPage = (page_ID) => {
        this.props.switchPage(page_ID)
    }
}

export default HomeSidebar
