import React, { Component } from 'react';

import { appConfig } from '../../config';
import { NavBar } from '../../components';
import MainRoutes from '../../routes/MainRoutes';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div id="appContainer">
                <div id="appContainer">
                    <NavBar brand={appConfig.appName} toggle={this.toggle.bind(this)} isOpen={this.state.isOpen} />
                    <div id="content" className="container-fluid">
                        <div style={{paddingTop: '5%'}} ></div>
                        <MainRoutes />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;