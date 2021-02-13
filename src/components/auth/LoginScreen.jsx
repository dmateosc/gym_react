import React from 'react'

export const LoginScreen = () => {

    const handleSubmit = (event) => {
        
    };
    

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="nickname">Nickname</label>
                <input type="text" value="" name="nickname"/>
                <label htmlFor="password">Password</label>
                <input type="password" value="" name="password"/>

                
            </form>
        </div>
    )
}
