import React, { Component, Fragment } from 'react'
import HomeSidebar from './HomeSidebar'

export class Home extends Component {
    state = { selected_page_ID: 0 }

    switchPage = (id) => {
        this.setState({selected_page_ID: id})
    }


    render() {
        return (
            <Fragment>
                <HomeSidebar switchPage={this.switchPage}> </HomeSidebar>
    
                { this.renderSelectedPage() }
            </Fragment>
        )
    }

    renderSelectedPage = () => {
        switch (this.state.selected_page_ID) {
            case 1:
                return this.renderGamesPage()
            default:
                return null;
        }
    }

    renderGamesPage = () => {
        return (
            <div>
                br
                <br/>
                brrr
            </div>
        )
    }
}

export default Home
