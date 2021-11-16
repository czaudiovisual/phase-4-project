// import React, { useEffect } from "react";
import React from "react"
import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"

class Claims extends React.Component {
    state = {
        claims: []
    };

    componentDidMount() {
        fetch("/claims")
            .then((res) => res.json())
            .then((claims) => this.setState({ claims }));
    };

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    deleteClaims = (event) => {
        // console.log(event.target.id)
        fetch(`/claims/${event.target.id}`, {
            method: "DELETE",
        })
            // .then((res) => res.json())
            .then(() => {
                const filterClaims = this.state.claims.filter(claim => {
                    // console.log(claim, "Deleted -----", event.target.id != claim.id);
                    return claim.id != event.target.id;
                })
                return this.setState({
                    claims: [...filterClaims]
                })
            });
    }

    renderClaims = () => {
        return this.state.claims.map((claim) => {
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
                                    <Button id={claim.id} className="d-grid gap-2" variant="danger" size="sm" onClick={this.deleteClaims}>Delete</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            )
        });
    };

    render() {
        return (
            <div>
                
                <div className="body-claim">
                    <br />
                    <ul>{this.renderClaims()}</ul>
                </div>
            </div>
        );

    }
}

export default Claims;