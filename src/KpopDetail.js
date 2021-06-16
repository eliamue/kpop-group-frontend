import React, { Component } from 'react';
import request from 'superagent';

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class KpopDetail extends Component {
    state = {
        kpopDetail: {},
        loading: false
    };

    componentDidMount() {
        this.fetchDetail();
    }

    fetchDetail = async () => {
        this.setState({ loading: true });
        const data = await request.get(
            `https://kpop-group-api.herokuapp.com/kpop/${this.props.match.params.id}`
        );

        await sleep(1000)
        this.setState({ kpopDetail: data.body });
        this.setState({ loading: false })
    }

    render() {
        return (
            <div style={{'backgroundColor': `${this.state.kpopDetail.color_1}`}}>
                <h3>{this.props.match.params.id}</h3>

                    <h1 style={{'color': `${this.state.kpopDetail.color_2}`}}>{this.state.kpopDetail.name}</h1>

                    <h3>{this.state.kpopDetail.gender}</h3>
                    <h3>{this.state.kpopDetail.members}</h3>
                    <h3>{this.state.kpopDetail.members_changed}</h3>
                    <h3>{this.state.kpopDetail.label}</h3>
                    <h3>{this.state.kpopDetail.fanbase_name}</h3>
                    <h3>{this.state.kpopDetail.symbol}</h3>
                    <h3>{this.state.kpopDetail.newest_release}</h3>
                    <h3>{this.state.kpopDetail.biggest_hit}</h3>
                    <h1>{this.state.kpopDetail.debut_year}</h1>
                    <h1>{this.state.kpopDetail.debut_song}</h1>
            </div>
        )
    }
}