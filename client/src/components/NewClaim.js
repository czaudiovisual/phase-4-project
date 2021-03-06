// import React from 'react'
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap'
import { useState } from 'react';
import { useHistory } from 'react-router';
import '../App.css';

function NewClaim() {
    const [address, setAddress] = useState('')
    const [item_name, setItemName] = useState('')
    const [description, setDescription] = useState('')
    const [image_url, setImage] = useState('')
    const [errors, setErrors] = useState("")
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
                image_url: image_url,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((
                        history.push('/claims')
                    ))
                } else {
                    response.json().then(errors => {
                        setErrors(errors.errors)
                    })
                }
            })
    }

    const displayError = () => {
        return errors.map(error => {
            return <div className="alert alert-danger" role="alert">{error}</div>
        })
    }

    return (
        <div className="body-app">
            <div className="form-outsider">
                <div className="form-container">
                    <form className="register-form" onSubmit={handleOnSubmit}>
                        {errors ?
                            <Alert variant="danger">{errors && displayError()}</Alert> : <Alert variant="danger="></Alert>
                        }
                        <p>Add Claim</p>
                        <input
                            onChange={(event) => setAddress(event.target.value)}
                            value={address}
                            className="form-field"
                            placeholder="Address"
                            type="text"
                            id="address"
                            name="address" />
                        <input
                            onChange={(event) => setItemName(event.target.value)}
                            value={item_name}
                            className="form-field"
                            placeholder="Item"
                            type="text"
                            id="item_name"
                            name="item_name" />
                        <input
                            onChange={(event) => setImage(event.target.value)}
                            value={image_url}
                            className="form-field"
                            placeholder="Image Url"
                            type="text"
                            id="image_url"
                            name="image_url" />
                        <textarea
                            onChange={(event) => setDescription(event.target.value)}
                            value={description}
                            className="form-field"
                            placeholder="Description"
                            type="text"
                            id="description"
                            name="description"
                            form="usrform">Enter description here...
                        </textarea>
                        <Button variant="success" type="submit">Submit</Button>{' '}
                    </form>
                    <div className="new-member-form-container-container"> </div>
                </ div>
            </div>
        </div>
    )
}

export default NewClaim;