import React, { Component } from 'react'
import { createKpopGroup } from './fetch-utils';
import './App.css';

export default class CreatePage extends Component {
    state = {
        name: '',
        members: 1,
        debut_year: 2015,
        gender_id: 1,
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
            debut_year: this.state.debut_year,
            gender_id: this.state.gender_id
        });

        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name of Group: 
                        <input onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Number of Members: 
                        <input type='number' maxLength='2' onChange={this.handleMembersChange} />
                    </label>
                    <label>
                        Debut Year: 
                        <input type='number' maxLength='4' onChange={this.handleDebutYearChange} />
                    </label>
                    <label>
                        Gender* of Group: 
                        <select onChange={this.handleGenderChange}>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
                    </label>
                    <button>Create!</button>
                </form>
                <p className='disclaimer'>
                    <p>*For the purpose of this exercise, only 2 genders on the gender spectrum are listed.</p>
                    <p>Be gay, do crime, eat the rich, screw gender norms, and go drink some water.</p>
                </p>
            </div>
        )
    }
}