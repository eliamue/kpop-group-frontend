import React, { Component } from 'react'
import { createKpopGroup } from './fetch-utils';

export default class CreatePage extends Component {
    state = {
        name: '',
        complexity: 0,
        category_id: 1,
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleGenderChange = e => {
        this.setState({ gender_id: e.target.value });
    }

    handleMembersChange = e => {
        this.setState({ members: e.target.value });
    }

    handleDebutYearChange = e => {
        this.setState({ debut_year: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        await createKpopGroup({
            name: this.state.name,
            members: this.state.members,
            gender_id: this.state.gender_id
        });

        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name of Group
                        <input onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Number of Members
                        <input type='number' onChange={this.handleMembersChange} />
                    </label>
                    <label>
                        Gender of Group
                        <select onChange={this.handleGenderChange}>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Other</option>
                        </select>
                    </label>
                    <button>Create!</button>
                </form>
            </div>
        )
    }
}