import React, { useState } from 'react';

const TeamForm = (props) => {
    const [formData, setFormData] = useState({
        id: Date.now(),
        name: '',
        email: '',
        role: ''
    })

    const changeHandler = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = event => {
        event.preventDefault();
        props.onSubmit(formData);
        setFormData({
            id: Date.now(),
            name: '',
            email: '',
            role: ''
        })
    }

    console.log(formData);
    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name: </label>
            <input 
            id="name" 
            name="name" 
            type="text" 
            value={formData.name}
            onChange={changeHandler}
            />

            <label htmlFor="email"> Email: </label>
            <input 
            id="email" 
            name="email" 
            type="email"
            value={formData.email}
            onChange={changeHandler}
            />

           <label>
                Role: 
                <select value={formData.role} name='role' onChange={changeHandler}>
                    <option value=''></option>
                    <option value="React Developer">React Developer</option>
                    <option value="Data scientist">Data Scientist</option>
                    <option value="IOS Developer">IOS Developer</option>
                    <option value="Printer unjammer">Printer unjammer</option>
                    <option value="Gopher">Gopher</option>
                </select>
           </label>
           <button type='submit'>Submit Form</button>
        </form>
    )
}

export default TeamForm;