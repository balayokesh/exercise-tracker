import React, { useState, useEffect } from 'react';
import ExerciseListTable from './ExerciseListTable.component';
import axios from 'axios';

export default function ExerciseList () {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
            .then(res => {
                setExercises(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(res => {
                alert(res);
            })
            .catch(err => {
                alert(err);
            })
        
        setExercises(exercises.filter(el => el._id !== id))
    }

    const exerciseList = () => {
        return(
            exercises.map(currentExercise => {
                return <ExerciseListTable exercise={currentExercise} deleteExercise={deleteExercise} key={currentExercise._id} />
            })
        );
    }

    return (
        <div className='container'> 
            <h1>Exercise List:</h1>
            <table className='table'>
                <thead className='thead-light'>
                    <tr>
                        <th>User Name</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exerciseList()}
                </tbody>
            </table>
        </div>
    );
}