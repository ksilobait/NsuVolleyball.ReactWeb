import React, { Component } from 'react'
import PropTypes from 'prop-types'
import onClickOutside from "react-onclickoutside";

export class Game extends Component {
    static propTypes = {
        // from GamesPage
        game: PropTypes.object.isRequired,
        saveGame: PropTypes.func.isRequired
    }

    state = {
        key : -1,
        picture: '',
        name: '',
        date: '',
        location: ''
    }

    componentDidMount() {
        if (this.props.game) {
            this.setState({
                key: this.props.game.key,
                picture: this.props.game.picture,
                name: this.props.game.name,
                date: this.props.game.date,
                location: this.props.game.location
            })
        }
    }

    onChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({[name]: value})
    }

    handleClickOutside = evt => {
        this.props.saveGame(null)
    };


    render() {
        return (
            <div className="game-edit-window">
                <label>Ссылка на из.:</label><input name='picture' value={this.state.picture} onChange={this.onChange}></input>
                <label>Название:</label><input name='name' value={this.state.name} onChange={this.onChange}></input>
                <label>Дата:</label><input name='date' value={this.state.date} onChange={this.onChange}></input>
                <label>Место:</label><input name='location' value={this.state.location} onChange={this.onChange}></input>
                <button onClick={() => {this.props.saveGame(this.state)}}>Сохранить</button>
            </div>
        )
    }
}

export default onClickOutside(Game);
