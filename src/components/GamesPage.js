import React, { Component } from 'react'
import '../static/css/games-page.css'
import Game from './Game.js'
import PropTypes from 'prop-types'
import axios from 'axios'

export class GamesPage extends Component {
    static propTypes = {
        // from Home
        isAuthorized: PropTypes.bool.isRequired
    }

    state = {
        futureTab: true,
        futureGames: [],
        pastGames: [],
        selectedForEditGame: null
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/games").then((res) => {
            this.setState({
                futureGames: res.data.future.map((game) => {
                    return {key: game.id, picture: 'https://www.flaticon.com/svg/static/icons/svg/3571/3571555.svg', name: game.name, date: game.time, location: game.stadium}}),
                pastGames: res.data.past.map((game) => {
                    return {key: game.id, picture: 'https://www.flaticon.com/svg/static/icons/svg/3571/3571555.svg', name: game.name, date: game.time, location: game.stadium}})
            })
        })
    }

    render() {
        const stylePressed = {background: 'blue', color: 'white'};
        let styleFutureTab = this.state.futureTab ? stylePressed : {}
        let stylePastTab = this.state.futureTab ? {} : stylePressed
        
        return (
            <div>
                <div className='buttons'>
                    <button onClick={() => {this.setState({futureTab: true})}} style={styleFutureTab}>Будущие</button>
                    <button onClick={() => {this.setState({futureTab: false})}} style={stylePastTab}>Прошедшие</button>
                </div>
                {this.state.futureTab ? this.renderFutureTab() : this.renderPastTab()}
                {this.state.selectedForEditGame ? <Game game={this.state.selectedForEditGame} saveGame={this.saveGame}/> : null}
            </div>
        )
    }

    renderTable = (games) => {
        return games.map((x) => {
            return (
                <div key={x.key} className='game-row'>
                    <img src={x.picture}/>
                    <div className='game-row-info'>
                        <div>{x.name}</div>
                        <div>{x.date}</div>
                        <div>{x.location}</div>
                    </div>
                    {
                        this.props.isAuthorized
                            ? <button onClick={() => {this.setState({selectedForEditGame: x})}}><i className="fas fa-pen"></i></button>
                            : null
                    }
                </div>
            )
        })
    }

    renderFutureTab = () => {
        return (
            <div>
                {this.renderTable(this.state.futureGames)}
            </div>
        )
    }

    renderPastTab = () => {
        return (
            <div>
                {this.renderTable(this.state.pastGames)}
            </div>
        )
    }

    saveGame = (newGame) => {
        if (newGame === null) {
            this.setState({selectedForEditGame: null});
            return;
        }
        let futureGames = this.state.futureGames
        let pastGames = this.state.pastGames
        futureGames = futureGames.map((game) => {return game.key === newGame.key ? newGame : game})
        pastGames = pastGames.map((game) => {return game.key === newGame.key ? newGame : game})
        this.setState({futureGames, pastGames, selectedForEditGame: null})
    }
}

export default GamesPage
