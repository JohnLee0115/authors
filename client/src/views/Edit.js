import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'  
import AuthorForm from "../components/AuthorForm";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Edit = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/'+id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    })

    const updateAuthor = author => {
        axios.patch('http://localhost:8000/api/authors/'+id, author)
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
            <Link to={'/authors'}>Home</Link>
            <h2>Edit this Author</h2>
            {errors.map((err, index) => <p key={index}>{err}</p> )}
            {loaded && <AuthorForm onSubmitProp={updateAuthor} initialName={author.name} />}
        </div>
        
    )
}

export default Edit

