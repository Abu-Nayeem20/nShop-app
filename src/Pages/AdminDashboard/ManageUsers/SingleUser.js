import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SingleUser = ({ user }) => {

    const [singleUser, setSingleUser] = useState(user);
    // console.log(order)
    const {_id, displayName, email, photo, role} = singleUser;

    const updateRoleField = e => {
        const updatedRole = e.target.value;
        updateUserRole(_id, updatedRole);
    };

    const updateUserRole = (id, updatedRole) => {
       
        const updateRole = {role: updatedRole};

        const url = `https://sleepy-bayou-81445.herokuapp.com/allUsers/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateRole)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                const updatedUser = {...singleUser, role: updatedRole };
                setSingleUser(updatedUser);
            }
        })

    }

    return (
        <tr>
            <td><img src={photo} alt={photo} /></td>
            <td>{displayName}</td>
            <td>{email}</td>
            <td>{role}</td>
            <td>
            <div>
            <Form.Select size="lg" className='' onChange={updateRoleField}>
            <option>User</option>
            <option>Admin</option>
            </Form.Select>
            </div>
            </td>
        </tr>
    );
};

export default SingleUser;