import React from "react";
import './Header.css'
import Version from '../Version/Version.js'

export default class Header extends React.Component {
    render(props) {
        return (
        <header>
            <h1>Welcome to The Auto-Budgeting Tool</h1>
            <Version />
        </header>
        )
    }
}