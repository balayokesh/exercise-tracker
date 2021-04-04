import React, { useState } from 'react';
import axios from 'axios';

export default function CreateUser () {

    const [username, setUserName] = useState('');

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    function handleFormSubmit (e) {
        e.preventDefault();
        let user = {
            username: username
        };
        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => alert(res.data))
            .catch(err => alert(err))
    }

    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                <div className='form-group'>
                    <label>User Name:</label>
                    <input 
                        type='text' 
                        required
                        className='form-control'
                        value={username}
                        onChange={onChangeUserName}
                    />
                </div>
                <input type='submit' className='btn btn-success' />
            </form>
        </div>
    );
}