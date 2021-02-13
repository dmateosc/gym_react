import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const [formValues, handleInputChange] = useForm({
        nickname: '',
        password: ''
    });

    const dispatch = useDispatch()
    const {nickname, password} = formValues;

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(startLogin(nickname,password))
    };
    

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="nickname">Nickname</label>
                <input type="text" value={nickname} name="nickname" onChange={handleInputChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" value={password} name="password" onChange={handleInputChange}/>

                <button type="submit">Login</button>
                
            </form>
        </div>
    )
}
