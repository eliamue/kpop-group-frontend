import React, { Component } from 'react';
import KpopItem from './KpopItem.js';
import { Link } from 'react-router-dom';

export default class KpopList extends Component {
    render() {
        return (
            <div>
                {this.props.kpoplist.map((kpoplist, i) => (
                <Link key={kpoplist.id} to={`/kpop/${kpoplist.id}`}>
                    <KpopItem data={kpoplist} key={i} />
                </Link>
                ))}
            </div>
        );
    }
}