import React, { Component } from 'react';
import './App.css'

export default class Kpopitem extends Component {
    render() {
        return (
            <div>
                <h1 className="name">{this.props.data.name}</h1>
            </div>
        )
    }
}
