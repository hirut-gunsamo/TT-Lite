import React from 'react';
import Sensor from '../Dashboard/Sensor'
import axios from 'axios'


import {
  Card,
  CardBody,
  CardTitle,
  Input,
  Table,

} from 'reactstrap';

import '../../Assets/css/dataLog.css';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items : null
    }

    this.toggle10 = this.toggle10.bind(this);
    this.toggle20 = this.toggle20.bind(this);
    this.toggle30 = this.toggle30.bind(this);
    this.toggle40 = this.toggle40.bind(this);
    this.state = {
      tooltipOpen10: false,
      tooltipOpen20: false,
      tooltipOpen30: false,
      tooltipOpen40: false
    };
  }
  async componentWillMount() {
    const token =localStorage.getItem("token");
    console.log("token: ", token);
    const result = await axios.get('http://localhost:3000/sensor/', { headers: {"Authorization" : `Bearer ${token}`} });

    console.log('sensor result ', result);
    this.setState({items: result.data})
    console.log('Item :', this.state.items)

}


  toggle10() {
    this.setState({
      tooltipOpen10: !this.state.tooltipOpen10
    });
  }

  toggle20() {
    this.setState({
      tooltipOpen20: !this.state.tooltipOpen20
    });
  }

  toggle30() {
    this.setState({
      tooltipOpen30: !this.state.tooltipOpen30
    });
  }

  toggle40() {
    this.setState({
      tooltipOpen40: !this.state.tooltipOpen40
    });
  }

  render() {
    this.state.items && console.log("Item on render:",this.state.items);
    
    
    if(this.state.items && this.state.items.length > 0){
      console.log('passing ', this.state.items.Items);
    } else {
      return <p>Loading</p>;
    }

    return (
      /*--------------------------------------------------------------------------------*/
      /* Used In Dashboard-4 [General]                                                  */
      /*--------------------------------------------------------------------------------*/
      <div style={{ marginLeft: 15 }}>
        <Card>
          <CardBody>
            <div className="d-flex align-items-center">
              <div>
                <CardTitle><h4>Data Log</h4>  </CardTitle>
              </div>
              <div className="ml-auto d-flex no-block align-items-center">
                <div className="dl">
                  <Input type="select" className="custom-select">
                    <option value="0">Time</option>
                    <option value="1">Status</option>
                    <option value="1">Triggered </option>
                  </Input>
                </div>
              </div>
            </div>
            <Table className="no-wrap v-middle" responsive>
              <thead>
                <tr className="border-0">
                  <th className="border-0">Sensor Types</th>
                  <th className="border-0">Status</th>
                  <th className="border-0">Date</th>
                  <th className="border-0">Time</th>
                  <th className="border-0">triggered </th>
                </tr>
              </thead>

              <tbody>
              {
                
                this.state.items && this.state.items.length > 0 && this.state.items.map((item, index) => (                    
                  <Sensor key = {index} sensor_type ={item.Sensors_type} status={item.Status} date = {item.Date} time={item.Time} trigger={item.Triggered}/>
                ))
                
              }
                
              </tbody>

            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Projects;
