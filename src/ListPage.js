import React, { Component } from 'react';
import request from 'superagent';
import KpopList from './KpopList.js';

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class ListPage extends Component {
    state = {
        kpoplist: [],
        loading: true,
    };

componentDidMount = async () => {
    await this.fetchKpop();
};

fetchKpop = async () => {
    this.setState({
        loading: true
    })

    const URL = `https://kpop-group-api.herokuapp.com/kpop`;

    const data = await request.get(URL)
    await sleep(1000)

    this.setState({
        loading: true,
        kpoplist: data.body
    })
}


    render() {
        return (
            <div>
                <KpopList
                kpoplist={this.state.kpoplist}
                />
            </div>
        )
    }
}
