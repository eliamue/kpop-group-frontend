import React, { Component } from 'react';
import { getAllKpopGroups } from './fetch-utils';
import { Link } from 'react-router-dom';

export default class ListPage extends Component {
    state = { 
        kpop: []
    }

    componentDidMount = async () => {
        const kpopgroups = await getAllKpopGroups();

        this.setState({kpop: kpopgroups})
    }

    render() {
        return (
            <div>
                {
                    this.state.kpop.map(kpop => <Link to={`/kpop/${kpop.id}`}>
                    <div>
                        <p>{kpop.name}</p>
                        <p>{kpop.members}</p>
                        <p>{kpop.gender}</p>
                        <p>{kpop.debut_year}</p>
                    </div>
                    </Link>)
                }
            </div>
        )
    }
}
