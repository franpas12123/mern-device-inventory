import React, { Component } from 'react'
import axios from 'axios'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default class AddDevice extends Component {
    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeField = this.onChangeField.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeAvailability = this.onChangeAvailability.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            name: '',
            field: '',
            description: '',
            images: '',
            availability: new Date(),
        }
    }

    onChangeName(e) {
        console.log(this.state)
        this.setState({
            name: e.target.value
        })
    }

    onChangeField(e) {
        this.setState({
            field: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeAvailability(date) {
        this.setState({
            availability: date
        })
    }

    onSubmit(e) {
        e.preventDefault()
        const newDevice = {
            name: this.state.name,
            field: this.state.field,
            description: this.state.description,
            availability: this.state.availability
        }

        // Save to db
        console.log(newDevice)

        // window.location = '/'
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:5000/devices')


        if (res.status === 200) {
            console.log('===========')
            console.log(res.data[0])
            const { name, field, description, images } = res.data[0]
            console.log(name)
            this.setState({
                name, field, description, images
                // name: name, field: field, description: description, images: images, availability: availability
            })
        }
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <h1>Edit Device</h1>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicField">
                        <Form.Label>Field</Form.Label>
                        <Form.Control type="text" placeholder="Enter field" value={this.state.field} onChange={this.onChangeField} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter field" value={this.state.description} onChange={this.onChangeDescription} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Choose an availability for this device</Form.Label>
                        <DatePicker selected={this.state.availability} onChange={this.onChangeAvailability} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}
