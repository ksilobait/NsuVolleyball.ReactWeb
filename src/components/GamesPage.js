import React, { Component } from 'react'
import '../static/css/games-page.css'

export class GamesPage extends Component {
    state = {
        futureTab: true,
        futureGames: [],
        pastGames: []
    }

    componentDidMount() {
        const futureGames = [
            {
                picture: "https://www.flaticon.com/svg/static/icons/svg/3571/3571555.svg",
                name: "НГУ vs НГТУ",
                date: 'new Date()',
                location: "СК НГТУ"
            },
            {
                picture: "https://www.flaticon.com/svg/static/icons/svg/3571/3571852.svg",
                name: "НГТУ vs НГУ",
                date: 'new Date()',
                location: "СК НГУ"
            }
        ]
        const pastGames = [
            {
                picture: "https://www.flaticon.com/svg/static/icons/svg/3571/3571852.svg",
                name: "ззз vs ыыы",
                date: 'new Date()',
                location: "СК СК"
            },
            {
                picture: "https://www.flaticon.com/svg/static/icons/svg/3571/3571555.svg",
                name: "СК СК",
                date: 'new Date()',
                location: "ride"
            }
        ]
        this.setState({futureGames, pastGames})
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
            </div>
        )
    }

    renderTable = (games) => {
        return games.map((x) => {
            return (
                <div className='game-row'>
                    <img src={x.picture}/>
                    <div className='game-row-info'>
                        <div>{x.name}</div>
                        <div>{x.date}</div>
                        <div>{x.location}</div>
                    </div>
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
}

export default GamesPage
