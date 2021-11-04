import React from "react";

class Claims extends React.Component {
    state = {
        claims: []
    };

    componentDidMount() {
        fetch("/claims")
            .then((res) => res.json())
            .then((claims) => this.setState({ claims }));
    };

    // // handleOnChange = (event) => {
    // //     const { value } = event.target;
    // //     const claims = this.state.claims.filter(movie => {
    // //         return movie.theater_id == value
    // //     })
    // //     this.setState({ filterAllMovies })
    // // };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    // deleteClick = (event) => {
    //     // console.log(event.target.id)
    //     fetch(`http://localhost:3000/claims/${event.target.id}`, {
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
    //                 movies: [...filterMovies],
    //                 filterAllMovies: [...filterMoreMovies]
    //             })
    //         });

    // }

    // renderTheatersForm = () => {
    //     console.log(this.state.theaters)
    //     return this.state.claims.map(theaters => {
    //         return <option
    //             value={theaters.id}>{t.name}</option>
    //     });
    // }

    renderClaims = () => {
        return this.state.claims.map((claim) => {
            return <div className="card-box">
                <h3 className="movie-titles">{claim.item_name}</h3>
                <h3 className="movie-titles">{claim.description}</h3>
                <p>Hello</p>
                <img className="img-poster" src={claim.description} alt="img-url" />
                <button className="button-img"
                    id={claim.id}
                    onClick={this.deleteClick}>Delete</button>
                <p className="movie-titles"><small>{claim.description}</small></p>
            </div>
        });
    };

    render() {
        return (
            <div className="">
                <h1>Hello</h1>
                {this.renderClaims}
            </div>
        );

    }
}

export default Claims;