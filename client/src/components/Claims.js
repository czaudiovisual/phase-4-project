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

    deleteMember = (event) => {
        fetch(`claims/${event.target.id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ claims: [...this.state.claims], data })
            });
    }

    renderClaims = () => {
        this.state.claims.map((claim) => {
            return <div>
                <p className="text-claim">{claim.address}</p>;
                <p>{claim.description}</p>;
                <p>{claim.item_name}</p>;
                <button className="button-img"
                    id={claim.id}
                    onClick={this.deleteClick}>Delete</button>

            </div>
        });
    };

    render() {
        return (
            <div>
                <ul>{this.renderClaims()}</ul>

            </div>
        )
    }
}

export default Claims;