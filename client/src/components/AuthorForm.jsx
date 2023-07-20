import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const AuthorForm = (props) => {
    const { initialName, onSubmitProp, errors } = props;
    const [name, setName] = useState(initialName);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name});
        setName("");
    }

    const goHome = () => {
        navigate('/authors')
    }



    return (
        <form onSubmit={onSubmitHandler} >
            <div>
                <label>Full Name: </label>
                <input type="text" name='name' value={name} onChange={(e) => {setName(e.target.value) }} />
                <input type="submit" />
                <button onClick={(e) => {goHome()}}>Cancel</button>
            </div>
        </form>
    )
}

export default AuthorForm