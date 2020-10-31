import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import '../static/css/home-sidebar.css'

export class HomeSidebar extends Component {
    static propTypes = {
        switchPage: PropTypes.func.isRequired // from Home
    }

    state = {
    }
    
    render() {
        return (
            <div className='home-sidebar'>
                <button onClick={() => { this.switchPage(1) }}> Игры </button>
                <button onClick={() => { this.switchPage(2) }}> Новости </button>
                <button onClick={() => { this.switchPage(3) }}> Галерея </button>
                <button onClick={() => { this.switchPage(4) }}> Команда </button>
                <button onClick={() => { this.switchPage(5) }}> Тренировки </button>
                <button onClick={() => { this.switchPage(6) }}> Контакты </button>
            </div>
        )
    }

    switchPage = (page_ID) => {
        this.props.switchPage(page_ID)
    }
}

export default HomeSidebar
