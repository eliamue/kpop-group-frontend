import React, { Component } from 'react';
import { getAllKpopGroups } from './fetch-utils';
// import { Link } from 'react-router-dom';
// import KpopItem from './KpopItem.js';

export default class ListPage extends Component {
    state = { 
        kpop: []
    }

    componentDidMount = async () => {
        const kpop = await getAllKpopGroups();

        this.setState({kpop: kpop})
    }

    render() {
        return (
            <div>
                {
                    this.state.kpop.map(kpop => <div className="kpop-data">
                        <p>{kpop.name}</p>
                        <p>{kpop.members}</p>
                        <p>{kpop.gender}</p>
                        <p>{kpop.debut_year}</p>
                    </div>)
                }
            </div>
        )
    }
}
