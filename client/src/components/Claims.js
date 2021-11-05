// import {useEffect, useState} from "react";
// import '../App.css';


// function Claims(){
//     const [claims, setClaims] = useState([])


//     return(
//         <div className="body-app">
//             <h1>Hello</h1>

//         </div>
//     )
// }

// export default Claims;

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

    // deleteClick = (event) => {
    //     // console.log(event.target.id)
    //     fetch(`/claims${event.target.id}`, {
    //         method: "DELETE",
    //     })
    //         .then(() => {
    //             const filterMovies = this.state.movies.filter(movie => {
    //                 // console.log(movie, "Deleted -----", event.target.id != movie.id);
    //                 return movie.id != event.target.id
    //             })
    //             const filterMoreMovies = this.state.filterAllMovies.filter(movie => {
    //                 return movie.id != event.target.id
    //             })
    //             return this.setState({
    //                 claims: [...filterMovies],
    //                 filterAllMovies: [...filterMoreMovies]
    //             })
    //         });

    // }

    // renderTheatersForm = () => {
    //     return this.state.theaters.map(theaters => {
    //         return <option
    //             value={theaters.id}>{theaters.name}</option>
    //     });
    // }

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
                            <Button variant="primary" size="sm">Edit</Button>
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