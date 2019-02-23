import React, {Component} from 'react';

export default class ChartView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // const { data } = this.props; // assume that the data will be passed in as props

        let data = [{date: 1, time: 2}, {location: 3, saved: 4}]; // sample test data

        return (
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Location</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((elem, index) =>
                        <tr key={index}>
                        {/* placeholders until we know what the data actually looks like */}
                            <td>{elem.date}</td>
                            <td>{elem.time}</td>
                            <td>{elem.location}</td>
                            <td>{elem.saved}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        )
    }
}