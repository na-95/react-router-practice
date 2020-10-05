import React, { Component } from 'react';
import './Navbar.css'


export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="logo">Logo</div>
                <ul>
                    <li>About</li>
                    <li>Shop</li>
                </ul>
            </nav>
        )
    }
}
