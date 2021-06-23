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
            <div className='kpoplist'>
                {
                    this.state.kpop.map(kpop => <Link to={`/kpop/${kpop.id}`}>
                    <div className='pgroups'>
                        <p className='name'>{kpop.name}</p>

                        <section className='stats'>
                            <p className='members-label'>
                                consists of
                                <p className='members'>
                                    {kpop.members}
                                </p>
                                <p className='gender'>
                                    {kpop.group_gender}
                                </p>
                            </p>
                                <p  className='gender-label'>members</p>
                        </section>
                        
                        <p className='debut-label'>Debuted in <p className='debut'>{kpop.debut_year}</p></p>
                    </div>
                    </Link>)
                }
            </div>
        )
    }
}
