import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredText, setenteredText] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0) {
            setError({
                title: "Invalid Input",
                msg: "Please enter a valid note!"
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredText);
        setEnteredUsername('');
        setenteredText('');
    }

    const usernameChange = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChange = (event) => {
        setenteredText(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
        <div>
            <h1 style={{ textAlign: "center", color:"black" }}>NOTES</h1>
        </div>
            <div>
                {error && <ErrorModal title={error.title} msg={error.msg} onConfirm={errorHandler} />}

                <Card className={classes.input}>
                    <form onSubmit={addUserHandler}>
                        <label htmlFor="text" >Note Heading</label>
                        <input id="text" type="text" value={enteredUsername} onChange={usernameChange} />
                        <label htmlFor="text" className="">Your Note</label>
                        <textarea id="text" type="text" value={enteredText} onChange={ageChange}></textarea><br></br>
                        <Button type="submit" >Add Note</Button>
                    </form>
                </Card>
            </div>
        </>
    );

};

export default AddUser;