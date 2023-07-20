import React, {useEffect, useState } from 'react';
import axios from 'axios'
import AuthorForm from '../components/AuthorForm';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const New = (props) => {

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();


    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => navigate('/authors'))
            .catch(err => {
                const errorResponse = err.response.data.errors;

                const errorArr = [];

                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <Link to={"/authors"} >Home</Link>
            <h2>Add a new Author: </h2>
            {errors.map((err, index) => <p key={index}>{err}</p> )}
            <AuthorForm onSubmitProp={createAuthor} initialName="" errors={errors} />
        </div>
    )
}

export default New;




