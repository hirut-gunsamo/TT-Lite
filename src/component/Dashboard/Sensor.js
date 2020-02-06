import React, { Component } from 'react';

class Sensor extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: parseInt(props.status) == 0 ? "OFF" : "ON",
            trigger: parseInt(props.trigger) == 0 ? "False" : "True"
        }
    }
    render() {
        return (
            <tr>                
                <td>
                    <h6 className="mb-0 font-16 font-medium" style={{ fontFamily: "Arail", fontSize: 20 }}>{this.props.sensor_type}</h6>
                </td>
                <td>
                    <span className="badge" style={{ border: "2px solid red", background: "red", color: "white" }}>
                        {this.state.status}
                    </span>
                </td>
                <td >{new Date(this.props.date).toDateString()}</td>
                <td className="blue-grey-text  text-darken-4 font-medium">{this.props.time}</td>
                <td>{this.state.trigger}</td>
            </tr>
        );
    }
}

export default Sensor;