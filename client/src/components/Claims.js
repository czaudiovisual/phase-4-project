import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Claims() {
    const [claims, setClaims] = useState([])

    useEffect(() => {
        fetch("/claims")
            .then((res) => res.json())
            .then((claims) => setClaims(claims))
    }, [])

    const deleteClaims = (event) => {
        fetch(`/claims/${event.target.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            const filterClaims = claims.filter(claim => {
                return claim.id != event.target.id;
            })
            return setClaims(filterClaims)
        });
    }

    const renderClaims = () => {
        return claims.map((claim) => {
            return (
                <div className="card-box">
                    <Card className="card-size" style={{ width: '18rem' }}>
                        <Card.Img className="image-url-size" variant="top" src={claim.image_url} />
                        <Card.Body>
                            <Card.Title>{claim.item_name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{claim.address}</Card.Subtitle>
                            <Card.Text>{claim.description}</Card.Text>
                            <div className="button-organizer">
                                <div className="d-grid gap-2">
                                    <Link className="d-grid gap-2" to={`/claims/${claim.id}/edit`}>
                                        <Button variant="primary" size="sm" >Edit</Button>
                                    </Link>
                                    <Button id={claim.id} className="d-grid gap-2" variant="danger" size="sm" onClick={deleteClaims}>Delete</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            )
        });
    };

    return (
        <div>

            <div className="body-claim">
                <br />
                <ul>{renderClaims()}</ul>
            </div>
        </div>
    );
}

export default Claims;