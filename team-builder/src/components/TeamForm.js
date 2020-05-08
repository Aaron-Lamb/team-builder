import React from 'react';

const TeamForm = () => {
    return(
        <form>
            <label htmlFor="name">Name: </label>
            <input id="name" name="name" type="text" />

            <label htmlFor="email"> Email: </label>
            <input id="email" name="email" type="email" />

           <label>
                Role: 
                <select>
                    <option value=""></option>
                    <option value="React Developer">React Developer</option>
                    <option value="Data scientist">Data Scientist</option>
                    <option value="IOS Developer">IOS Developer</option>
                    <option value="Printer unjammer">Printer unjammer</option>
                    <option value="Gopher">Gopher</option>
                </select>
           </label>
        </form>
    )
}

export default TeamForm;