import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import VerticalBar from './VerticalBar';

const Device = props => {
    const { _id, name, field, description, images, availability } = props.device
    return (
        <tr>
            <td>{name}</td>
            <td>{field}</td>
            <td>{description}</td>
            <td>{images}</td>
            <td>{availability.substring(0, 10)}</td>
            <td style={{ display: 'flex', justifyContent: 'space-evenly' }}><Link to={'/edit/' + _id}><Button className="button" variant="primary">Edit</Button></Link>  <Button className="button" variant="danger" onClick={() => { props.deleteDevice(_id) }}>Delete</Button></td>
        </tr>
    )
}

export default class DevicesList extends Component {
    constructor(props) {
        super(props)

        this.deleteDevice = this.deleteDevice.bind(this)

        this.state = {
            devices: [], availability: [], uniqueAvailability: [],
        }
    }

    componentDidMount() {
        // Fetch devices
        axios.get('http://localhost:5000/devices',)
            .then(res => {
                this.setState({ devices: res.data })
                const availability = []
                res.data.forEach(device => { availability.push(device.availability.substring(0, 10)) })
                this.setState({ availability })
            })
            .catch(err => console.log(err))
    }

    // List all devices
    deviceList() {
        return this.state.devices.map(device => {
            return <Device device={device} deleteDevice={this.deleteDevice} key={device._id} />
        })
    }

    async deleteDevice(id) {
        const res = await axios.delete('http://localhost:5000/devices/' + id)

        console.log(res.data)
        console.log('deleted!')

        this.setState({ devices: this.state.devices.filter(el => el._id !== id) })
    }

    render() {
        return (
            <Container>
                {console.log(this.state.data)}
                <VerticalBar></VerticalBar>
                <div>
                    <br></br>
                    <Table striped bordered hover variant="dark" responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Field</th>
                                <th>Description</th>
                                <th>Images</th>
                                <th>Availability</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.deviceList()}
                        </tbody>
                    </Table>
                </div>
            </Container>
        )
    }
}
