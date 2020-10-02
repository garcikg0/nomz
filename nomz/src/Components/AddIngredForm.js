import React from "react";
import { Modal, Col, Row, Button, Form } from "react-bootstrap"

class AddIngredForm extends React.Component {

    state = {
        kitchen_id: 1,
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
        let itemToBackEnd = {
            kitchen_id: this.state.kitchen_id,
            storage: this.state.storage,
            name: this.state.name,
            image: this.state.image,
            status: this.state.status,
            notes: this.state.notes
        }
        
        fetch("http://localhost:3000/ingredients", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(itemToBackEnd)
        })
        .then(res => res.json())
        .then((newIngred) => {
            this.props.addIngredient(newIngred)
            this.setState({
                show:false
            })
        })
    }

    render(){
        return(
        <> 
        <Button variant="success"
            onClick={this.handleClick}
            className="sticky-button">
                Add an Ingredient
        </Button>

        <Modal show={this.state.show} backdrop="static">
            <Modal.Header>
                <Modal.Title>Add an Ingredient</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="name" onChange={this.handleInputs} >
                        <Form.Label column sm={2} size="sm" >
                            Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control sizetype="name" placeholder="Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="storage" onChange={this.handleInputs} >
                        <Form.Label column sm={2} size="sm" >
                            Storage
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" defaultValue="">
                                <option></option>
                                <option>Fridge</option>
                                <option>Freezer</option>
                                <option>Pantry</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="image" onChange={this.handleInputs} >
                        <Form.Label column sm={2} size="sm" >
                            Icon
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control sizetype="name" placeholder="Icon" />
                        </Col>
                    </Form.Group> 
                    <Form.Group as={Row} controlId="status" onChange={this.handleInputs} > 
                        <Form.Label column sm={2} size="sm" >
                            Availability
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" defaultValue="">
                                <option></option>
                                <option>Available</option>
                                <option>Low</option>
                                <option>In Cart</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Button type="secondary"onClick={this.handleClick}>
                            Close
                        </Button>{" "}
                        <Button type="submit"onSubmit={this.handleSubmit} >Submit</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>             
        </Modal></>
        )
    }
}

export default AddIngredForm;