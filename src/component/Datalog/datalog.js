import React from "react";


import {
  Card,
  CardBody,
  CardTitle,
  Input,
  Table,

} from "reactstrap";

import '../../Assets/css/dataLog.css';

class Projects extends React.Component {
  constructor(props) {
    super(props);

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
    return (
      /*--------------------------------------------------------------------------------*/
      /* Used In Dashboard-4 [General]                                                  */
      /*--------------------------------------------------------------------------------*/
     <div style={{marginLeft:15}}>
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
              <tr>
                <td>
                  
                   <div className="">
                      <h6 className="mb-0 font-16 font-medium" style={{fontFamily:"Arail", fontSize:20}}>Sensor 1</h6>
                     </div>
                  </td>
                <td><span className="badge" style={{border:"2px solid green",background:"green",color:"white"}}>on</span></td>
                  
                <td>Dec 4, 2019</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                 11:05pm
                </td>
                <td>True</td>
              </tr>
              <tr>
                <td>
                  
                   <div className="">
                      <h6 className="mb-0 font-16 font-medium" style={{fontFamily:"Arail", fontSize:20}}>Sensor 2</h6>
                     </div>
                  </td>
                <td><span class="badge" style={{border:"2px solid red",background:"red",color:"white"}}>Off</span></td>
                  
                <td>Dec 6, 2019</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                 11:08pm
                </td>
                <td>True</td>
              </tr>
              <tr>
                <td>
                  
                   <div className="">
                      <h6 className="mb-0 font-16 font-medium" style={{fontFamily:"Arail", fontSize:20}}>Sensor 3</h6>
                     </div>
                  </td>
                <td><span class="badge" style={{border:"2px solid green",background:"green",color:"white"}}>on</span></td>
                  
                <td>Sep 7, 2019</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                 12:05pm
                </td>
                <td>False</td>
              </tr>
              <tr>
                <td>
                  
                   <div className="">
                      <h6 className="mb-0 font-16 font-medium" style={{fontFamily:"Arail", fontSize:20}}>Sensor 4</h6>
                     </div>
                  </td>
                <td><span class="badge" style={{border:"2px solid green",background:"green",color:"white"}}>on</span></td>
                  
                <td>Sep 8, 2019</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                 10:05am
                </td>
                <td>False</td>
              </tr>
              <tr>
                <td>
                  
                   <div className="">
                      <h6 className="mb-0 font-16 font-medium" style={{fontFamily:"Arail", fontSize:20}}>Sensor 5</h6>
                     </div>
                  </td>
                <td><span class="badge" style={{border:"2px solid red",background:"red",color:"white"}}>Off</span></td>
                  
                <td>Aug 10, 2019</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                 08:08am
                </td>
                <td>False</td>
              </tr>
              <tr>
                <td>
                  
                   <div className="">
                      <h6 className="mb-0 font-16 font-medium" style={{fontFamily:"Arail", fontSize:20}}>Sensor 6</h6>
                     </div>
                  </td>
                <td><span class="badge" style={{border:"2px solid red",background:"red",color:"white"}}>Off</span></td>
                  
                <td>June 9, 2019</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                 09:08am
                </td>
                <td>False</td>
              </tr>
              
            </tbody>
          </Table>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default Projects;
