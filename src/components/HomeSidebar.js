import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import '../static/css/home-sidebar.css'
import { login } from '../utils'

export class HomeSidebar extends Component {
    static propTypes = {
        // from Home
        switchPage: PropTypes.func.isRequired,
        logOut: PropTypes.func.isRequired,
        isAuthorized: PropTypes.bool.isRequired
    }

    state = {
    }
    
    
    render() {
        return (
            <div className='home-sidebar'>
                <button onClick={() => { this.props.switchPage(1) }}> Игры </button>
                <button onClick={() => { this.props.switchPage(2) }}> Новости </button>
                <button onClick={() => { this.props.switchPage(3) }}> Галерея </button>
                <button onClick={() => { this.props.switchPage(4) }}> Команда </button>
                <button onClick={() => { this.props.switchPage(5) }}> Тренировки </button>
                <button onClick={() => { this.props.switchPage(6) }}> Контакты </button>
                {
                    !this.props.isAuthorized ? <button id='login' onClick={() => { login() }}> Войти с помощью VK </button>
                                             : <button id='login' onClick={() => { this.props.logOut() }}> Выйти </button>
                }
            </div>
        )
    }
}

export default HomeSidebar
