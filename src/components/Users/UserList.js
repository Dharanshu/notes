import React from "react";
import classes from './UserList.module.css';
import Card from '../UI/Card';

const UserList = props => {
    return (
        <>
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        <center><h3>Saved Notes</h3></center>
                        <h2 style={{fontSize:"bold"}}>{user.name +" :"}</h2>
                        <p>{" "+user.text}</p>
                    </li>
                ))}
            </ul>
        </Card>
        </>
        );
}

export default UserList;