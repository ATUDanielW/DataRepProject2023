import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export class RemoveRecipe extends React.Component {

    constructor() {
        super();
        this.DeleteRecipe = this.DeleteRecipe.bind(this);
    }
    DeleteRecipe(e) {
        e.preventDefault();

        axios.delete('http://localhost:4000/api/book/' + this.props.book._id)
            .then((res) => { this.props.Reload(); })
            .catch();
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.Recipe}></img>
                            <footer >
                                {this.props.Recipe}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/edit/' + this.props.Recipe._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteRecipe}>Delete</Button>
                </Card>
            </div>
        );
    }
}