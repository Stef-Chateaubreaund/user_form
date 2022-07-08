import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [favoriteColor, setFavoriteColor] = useState("");
    const [address, setAddress] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, age, favoriteColor, address };
        console.log("hey, welcome", newUser);

    };
    return (
        <div>
            <div className="App">
                <form class ="form" onSubmit={createUser}>
                    <div>
                        <label>first name: </label>
                        <input type="text" onChange={(e) => setfirstName(e.target.value)} />
                    </div>
                    <div>
                        <label>last name: </label>
                        <input type="text" onChange={(e) => setlastName(e.target.value)} />
                    </div>
                    <div>
                        <label>email address: </label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>password: </label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>confirm password: </label>
                        <input type="password"  />
                        
                    </div>
                    <div>
                        <label>age </label>
                        <input type="text" onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div>
                        <label>fav color: </label>
                        <input type="text" onChange={(e) => setFavoriteColor(e.target.value)} />
                    </div>
                    <div>
                        <label>address: </label>
                        <input type="text" onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <input type="submit" value="Create User" />
                </form>
            </div>
            <h2> this is your info</h2>
            <p>first name: {firstName}</p>
            <p>last name: {lastName}</p>
            <p>email: {email}</p>
            <p>password: {password}</p>
            <p>age: {age}</p>
            <p>fav color: {favoriteColor}</p>
            <p>address: {address}</p>
        </div>
    );
}


export default UserForm;