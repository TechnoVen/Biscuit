import React, {Component} from 'react';

export default class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="header-container">
                <div className="header-left">
                    <h1>Biscuit</h1>
                </div>
                <div className="header-right">
                    <a href="#">Dashboard</a>
                    <a href="#">Account</a>
                </div>
            </div>
        );
    }
}