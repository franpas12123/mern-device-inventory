import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import { Bar } from 'react-chartjs-2';
import {
    BarChart, CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from 'recharts';

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

// import VerticalBar from './VerticalBar';

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
                this.countAvailability()
            })
            .catch(err => console.log(err))
    }


    countAvailability() {
        // console.log(dates)
        const dates = this.state.availability
        const datesCount = []
        const { labels, datasets } = this.state.data
        dates.forEach(date => {
            const foundDateCount = labels.find(label => label === date)
            // console.log('-------------------')
            // console.log(foundDateCount)
            if (!foundDateCount) {
                this.setState((state) => {
                    state.uniqueAvailability = [...state.uniqueAvailability, { label: date, count: 1 }]
                    // state.data.labels = [...state.data.labels, date]
                    // state.data.datasets[0].data.push(1)
                })
                // this.state.data.labels.push(date)
                // datasets[0].data.push(1)
            } else {
                // console.log(labels)
                const index = labels.indexOf(date)
                // console.log(datasets.data[index])
                // this.setState(state => state.data.datasets[0].data[index] += 1)
                // console.log(index)
                // datasets[0].data[index] += 1
                // foundDateCount.count++
            }
        })
        console.log(this.state)
        return datesCount
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
                <BarChart width={730} height={250} data={this.state.uniqueAvailability}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="labels" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
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
