import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

export default function CreateExercise () {

    const [username, setUserName] = useState('test user');
    const [users, setUsers] = useState(['test user 1', 'test user 2']);
    const [description, setDescription] = useState(' ');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    const onChangeDuration = (e) => {
        setDuration(e.target.value);
    }
    const onChangeDate = (e) => {
        setDate(e.target.value);
    }

    function handleFormSubmit (e) {
        e.preventDefault();

        let value = [
            username,
            description,
            duration,
            date
        ];
        console.log(value);
        window.location = '/';
    }

    return (
        <div className='container'>
            <h1>Create New Exercise:</h1>
            <form onSubmit={handleFormSubmit}>

                {/* Username */}
                <div className='form-group'>
                    <label>Username:</label>
                    <select 
                        required 
                        className='form-control' 
                        value={username}
                        onChange={onChangeUserName}
                    >
                    {users.map(function (user) {
                        return (
                            <option key={user} value={user}>{user}</option>
                        );
                    })}
                    </select>
                </div>

                {/* Description */}
                <div className='form-group'>
                    <label>Description:</label>
                    <input 
                        type='text' 
                        required
                        className='form-control'
                        onChange={onChangeDescription}
                        value={description}
                    />
                </div>

                {/* Duration */}
                <div className='form-group'>
                    <label>Duration (in mins):</label>
                    <input 
                        type='number' 
                        required
                        className='form-control'
                        onChange={onChangeDuration}
                        value={duration}
                    />
                </div>

                {/* Date */}
                <div className='form-group'>
                    <label>Date:</label>
                    <DatePicker 
                        onChange={onChangeDate}
                        value={date}
                    />
                </div>

                <input type='submit' value='Create Exercise' className='btn btn-success' />

            </form>
        </div>
    );
}