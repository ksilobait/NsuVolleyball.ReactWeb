import React, { Component, Fragment } from 'react'
import HomeSidebar from './HomeSidebar'
import '../static/css/home.css'
import GamesPage from './GamesPage'

export class Home extends Component {
    state = { selected_page_ID: 0 }

    switchPage = (id) => {
        this.setState({selected_page_ID: id})
    }

    render() {
        return (
            <Fragment>
                <HomeSidebar switchPage={this.switchPage}> </HomeSidebar>
                <div className='content'>
                    { this.renderSelectedPage() }
                </div>
            </Fragment>
        )
    }

    renderSelectedPage = () => {
        switch (this.state.selected_page_ID) {
            case 1:
                return <GamesPage/>
            default:
                return null;
        }
    }
}

export default Home
