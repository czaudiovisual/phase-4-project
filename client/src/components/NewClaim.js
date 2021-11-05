// import React from 'react'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router';
import '../App.css';


function NewClaim() {
    const [address, setAddress] = useState('')
    const [item_name, setItemName] = useState('')
    const [description, setDescription] = useState('')
    const history = useHistory()


    const handleOnSubmit = (event) => {
        event.preventDefault()
        fetch('/claims', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                address,
                item_name,
                description,
            }),
        })
            .then((res) => {
                history.push('/claims')
            })
    }


    return (
        <div className="form-outsider">
            <div className="form-container">
                <form className="register-form" onSubmit={handleOnSubmit}>
                    <p>Add Claim</p>
                    <input
                        onChange={(event) => setAddress(event.target.value)}
                        value={address}
                        className="form-field"
                        placeholder="Address"
                        type="text"
                        name="address" />
                    <input
                        onChange={(event) => setItemName(event.target.value)}
                        value={item_name}
                        className="form-field"
                        placeholder="Item"
                        type="text"
                        name="item_name" />
                    <textarea
                        onChange={(event) => setDescription(event.target.value)}
                        value={description}
                        className="form-field"
                        placeholder="Description"
                        type="text"
                        name="description"

                        form="usrform">Enter description here...
                    </textarea>
                    <Button variant="success" type="submit">Submit</Button>{' '}
                </form>
                <div className="new-member-form-container-container"> </div>
            </ div>
        </div>
    )
}

export default NewClaim;