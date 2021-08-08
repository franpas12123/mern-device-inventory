import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Devices',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const VerticalBar = () => (
    <>
        <div className='header'>
            <h1 className='title'>Devices Chart</h1>
        </div>
        <Bar data={data} options={options} />
    </>
);

export default VerticalBar;


// export default class VerticalBar extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             data: {
//                 // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Black'],
//                 labels: [],
//                 datasets: [
//                     {
//                         label: 'Availability',
//                         // data: [12, 19, 3, 5, 2, 3],
//                         data: [],
//                         backgroundColor: [
//                             'rgba(255, 99, 132, 0.2)',
//                             'rgba(54, 162, 235, 0.2)',
//                             'rgba(255, 206, 86, 0.2)',
//                             'rgba(75, 192, 192, 0.2)',
//                             'rgba(153, 102, 255, 0.2)',
//                             'rgba(255, 159, 64, 0.2)',
//                         ],
//                         borderColor: [
//                             'rgba(255, 99, 132, 1)',
//                             'rgba(54, 162, 235, 1)',
//                             'rgba(255, 206, 86, 1)',
//                             'rgba(75, 192, 192, 1)',
//                             'rgba(153, 102, 255, 1)',
//                             'rgba(255, 159, 64, 1)',
//                         ],
//                         borderWidth: 1,
//                     },
//                 ],
//             },

//             options: {
//                 scales: {
//                     yAxes: [
//                         {
//                             ticks: {
//                                 beginAtZero: true,
//                             },
//                         },
//                     ],
//                 },
//             },

//             countedAvailability: []
//         };
//         const avail = this.countAvailability(props.availability)
//         console.log(avail)
//         // this.setState({ countedAvailability:  })
//     }

//     countAvailability(dates) {
//         // console.log(dates)
//         const datesCount = []
//         const { labels, datasets } = this.state.data
//         dates.forEach(date => {
//             const foundDateCount = labels.find(label => label === date)
//             console.log(foundDateCount)
//             if (!foundDateCount) {
//                 labels.push(date)
//                 datasets[0].data.push(1)
//             } else {
//                 const index = labels.indexOf(date)
//                 datasets.data[index]++
//                 // foundDateCount.count++
//             }
//         })
//         return datesCount
//     }
//     render() {
//         return (
//             <div>
//                 <div className='header'>
//                     <h1 className='title'>Vertical Bar Chart</h1>
//                     <div className='links'>
//                         <a
//                             className='btn btn-gh'
//                             href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js'
//                         >
//                             Github Source
//                         </a>
//                     </div>
//                 </div>
//                 <Bar data={this.state.data} options={this.state.options} />
//                 {/* {countDates(props)} */}
//             </div>
//         )
//     }
// }

// // function populateData(dates) {
// //     const countedAvailability = countAvailability(dates)
// //     countedAvailability.forEach(date => {
// //         data.labels.push(date.date)

// //         console.log(date)
// //     })
// //     // console.log(countedAvailability)
// //     console.log(data)
// // }

// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const VerticalBar = (props) => {
//     console.log('============')
//     console.log(props.options)
//     console.log(props.data)
//     return (
//         <>
//             <div className='header'>
//                 <h1 className='title'>Vertical Bar Chart</h1>
//                 <div className='links'>
//                     <a
//                         className='btn btn-gh'
//                         href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js'
//                     >
//                         Github Sources
//                     </a>
//                 </div>
//             </div>
//             <Bar data={props.data} options={props.options} />
//         </>
//     )
// };

// export default VerticalBar;
