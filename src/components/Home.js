import React, { Component, Fragment } from 'react'
import HomeSidebar from './HomeSidebar'
import '../static/css/home.css'
import GamesPage from './GamesPage'
import { extractToken } from '../utils'

export class Home extends Component {
    state = { selected_page_ID: 0, is_authorized: false, authorized_user_IDs: ['50633206'] }

    componentDidMount() {
        if (window.location.href.includes('access')) {
            const user_ID = extractToken()
            if (this.state.authorized_user_IDs.includes(user_ID)) {
                this.setState({is_authorized: true})
            }
        }
    }

    switchPage = (id) => {
        this.setState({selected_page_ID: id})
    }

    render() {
        return (
            <Fragment>
                <HomeSidebar switchPage={this.switchPage} logOut={this.logOut} isAuthorized={this.state.is_authorized}> </HomeSidebar>
                <div className='content'>
                    { this.renderSelectedPage() }
                </div>
            </Fragment>
        )
    }

    renderSelectedPage = () => {
        switch (this.state.selected_page_ID) {
            case 1:
                return <GamesPage isAuthorized={this.state.is_authorized}/>
            default:
                return null;
        }
    }

    logOut = () => {
        this.setState({is_authorized: false})
    }
}

export default Home
