import React from "react";
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

    renderClaims = () => {
        return this.state.claims.map((claim) => {
            return <div className="card-box">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={claim.item_img} />
                    <Card.Body>
                        <Card.Title>{claim.item_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{claim.address}</Card.Subtitle>
                        <Card.Text>{claim.description}</Card.Text>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="sm" href={`/claims/${claim.id}/edit`}>Edit</Button>
                            <Button className="d-grid gap-2" variant="danger" size="sm">Delete</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        });
    };

    render() {
        return (
            <div className="body-claim">
                <div className="back-button">
                    <div className="card-wrapper">
                    </div>
                </div>
                <br />
                <ul>{this.renderClaims()}</ul>
            </div>
        );

    }
}

export default Claims;