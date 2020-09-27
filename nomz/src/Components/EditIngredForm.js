import React from "react";
import { Col, Row, Button, Form, Modal } from "react-bootstrap"

class EditIngredForm extends React.Component {

    state = {
        id: "",
        kitchen_id: "",
        storage: "",
        name: "",
        image: "",
        status: "",
        notes: "",
        show: false
    }

    handleClick = (evt) => {
        evt.preventDefault()
        let clicked = !this.state.show
        this.setState({
            id: this.props.ingredient.id,
            kitchen_id: this.props.ingredient.kitchen_id,
            storage: this.props.ingredient.storage,
            name: this.props.ingredient.name,
            image: this.props.ingredient.image,
            status: this.props.ingredient.status,
            notes: this.props.ingredient.notes,
            show: clicked
        })
    }

    handleInputs = (evt) => {
        this.setState({
            [evt.target.id]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        let itemID = this.state.id
        let itemtoBackEnd = {
            id: itemID,
            kitchen_id: this.state.kitchen_id,
            storage: this.state.storage,
            name: this.state.name,
            image: this.state.image,
            status: this.state.status,
            notes: this.state.notes
        }

        fetch(`http://localhost:3000/ingredients/${itemID}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(itemtoBackEnd)
        })
        .then(res => res.json())
        .then((editedIngred) => {
            this.props.editedIngredients(editedIngred)
            this.setState({
                show: false
            })
        })
    }

    render(){
        // console.log(this.state)
        return(
        <>    
        <Button variant="outline-primary" size="sm" block onClick={this.handleClick}>
            Edit
        </Button>
        <Modal
            show={this.state.show}
            backdrop="static"
            
            >
            <Modal.Header >
                <Modal.Title>Edit Ingredient</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="name" onChange={this.handleInputs}>
                        <Form.Label column sm={2} size="sm">
                            Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control sizetype="name" defaultValue={this.props.ingredient.name} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="storage" onChange={this.handleInputs}>
                        <Form.Label column sm={2} size="sm">
                            Storage
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" defaultValue={this.props.ingredient.storage}>
                                <option>Fridge</option>
                                <option>Freezer</option>
                                <option>Pantry</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="image" onChange={this.handleInputs}>
                        <Form.Label column sm={2} size="sm">
                            Icon
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control sizetype="name" defaultValue={this.props.ingredient.image} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="status" onChange={this.handleInputs}>
                        <Form.Label column sm={2} size="sm" >
                            Availability
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" defaultValue={this.props.ingredient.status}>
                                <option>Available</option>
                                <option>Low</option>
                                <option value="In Cart">Add to Cart</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Button type="secondary"onClick={this.handleClick}>
                            Close
                        </Button>{" "}
                        <Button type="submit" onSubmit={this.handleSubmit}>
                            Submit Changes
                        </Button>
                    </Form.Group>
                </Form>
            </Modal.Body>   
        </Modal>
        </>)
    };
}

export default EditIngredForm;