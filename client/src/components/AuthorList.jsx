import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AuthorList = (props) => {
    
    const {removeFromDom} = props;
    const navigate = useNavigate();

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/'+authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }

    const editAuthor = (authorId) => {
        navigate(`/authors/${authorId}/edit`)
    }


    return (
        <table>
            <tbody>
                <th>Author</th>
                <th>Actions Available</th>
            </tbody>
            {props.authors.map( (author, i) => {
            return <tr>
                        <td key={i} >{author.name}</td>
                        <td><button onClick={(e) => {editAuthor(author._id)}} >Edit</button> | <button onClick={(e) => {deleteAuthor(author._id)}} >Delete</button></td>
                    </tr>
            } )}
        </table>
    )
}

export default AuthorList