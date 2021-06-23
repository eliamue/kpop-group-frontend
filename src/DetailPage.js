import React, { Component } from 'react';
import { getAllGroupGenders, getOneKpopGroup, updateKpopGroup, deleteKpopGroup } from './fetch-utils';
import './App.css';

export default class DetailPage extends Component {
    state = {
        name: '',
        members: 1,
        debut_year: 2015,
        gender_id: 1,
        genders: []
    }

componentDidMount = async () => {
    const id = this.props.match.params.id;
    const group = await getOneKpopGroup(id);
    const genders = await getAllGroupGenders();

    this.setState({
        name: group.name,
        members: group.members,
        debut_year: group.debut_year,
        gender_id: group.gender_id,
        genders: genders,
    })
}

handleNameChange = e => {
    this.setState({ name: e.target.value });
}

handleMembersChange = e => {
    this.setState({ members: e.target.value });
}

handleDebutYearChange = e => {
    this.setState({ debut_year: e.target.value });
}

handleGenderChange = e => {
    this.setState({ gender_id: e.target.value });
}

handleDelete = e => {
    // this.setState({ gender_id: e.target.reset() });
    deleteKpopGroup(this.props.match.params.id);
    this.props.history.push('/');
    window.location.reload();
    };

handleSubmit= async e => {
    e.preventDefault();
console.log(this.state.gender_id);
    await updateKpopGroup(this.props.match.params.id, {
        name: this.state.name,
        members: this.state.members,
        debut_year: this.state.debut_year,
        gender_id: this.state.gender_id,
        owner_id: 1
    });
    this.props.history.push('/')
}
    render() {
        console.log(this.state);
        return (
            <div className='detail'>
                <h2>Update Kpop Group</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Members
                        <input value={this.state.members} type='number' onChange={this.handleMembersChange} />
                    </label>
                    <label>
                        Debut Year
                        <input value={this.state.debut_year} type='number' onChange={this.handleDebutYearChange} />
                    </label>
                    <label>
                        Gender of Group
                        <select onChange={this.handleGenderChange}>
                            {this.state.genders.map(gender => 
                                <option
                                    selected={gender.id === this.state.gender_id} 
                                    value={gender.id}>
                                    {gender.group_gender}
                                </option>
                                )
                                }
                            <option>select</option>
                        </select>
                    </label>
                    <button className="update-btn">Update</button>
                </form>
                
                <button onClick={this.handleDelete} className="delete-btn">Delete</button>
            </div>
        )
    }
}
