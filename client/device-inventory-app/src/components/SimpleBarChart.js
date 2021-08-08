import React, { Component } from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Date A',
        uv: 4000,
        amt: 2400,
    },
    {
        name: 'Date B',
        uv: 3000,
        amt: 2210,
    },
    {
        name: 'Date C',
        uv: 2000,
        amt: 2290,
    },
    {
        name: 'Date D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Date E',
        uv: 1890,
        amt: 2181,
    },
    {
        name: 'Date F',
        uv: 2390,
        amt: 2500,
    },
    {
        name: 'Date G',
        uv: 3490,
        amt: 2100,
    },
];

export default class SimpleBarChart extends Component {

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
