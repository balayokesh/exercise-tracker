import React, { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import axios from 'axios';

export default function EditExercise (props) {

    const [username, setUserName] = useState('');
    const [users, setUsers] = useState([]);
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());

    useEffect(() => {

        axios.get('http://localhost:5000/exercises/'+props.match.params.id)
            .then(res => {
                setUserName(res.data.username);
                setDescription(res.data.description);
                setDuration(res.data.duration);
                setDate(new Date(res.data.date));
            })

        axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data.length > 0) {
                setUsers(response.data.map(user => user.username));
            }
            else {
                alert(`Response length: ${response.length}`);
            }
        })
        .catch(err => {
            alert(err);
        })
    }, []); 

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

        let exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        };
        console.log(exercise);

        axios.post('http://localhost:5000/exercises/update/'+props.match.params.id, exercise)
            .then(res => alert(res.data))
            .catch(err => alert(err))
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
                    {users.map(user => {
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

                <input type='submit' value='Edit Exercise' className='btn btn-success' />

            </form>
        </div>
    );
}