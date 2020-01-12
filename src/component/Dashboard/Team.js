 /*--------------------------------------------------------------------------------*/
      /* images used in team lists from Assets 
      /* Card and table  also used from  "reactstrap": "^8.2.0"
      /* Button used from  "react-bootstrap": "^1.0.0-beta.16
  /*--------------------------------------------------------------------------------*/


import React from "react";
import jsotomayor from "../../Assets/images/Team/jsotomayer.jpg";
import isoulee from "../../Assets/images/Team/isoulee.jpg";
import zelbastami from "../../Assets/images/Team/zelbastami.jpg";
import cmcGladebouchard from "../../Assets/images/Team/cmcGladebouchard.jpg";
import ariosyu from "../../Assets/images/Team/ariosyu.jpg";

import { Card, CardBody, CardTitle, Table } from "reactstrap";
import { Button } from "reactstrap";
import "../../index.css";



class Team extends React.Component {
  render() {
    return (
      /*--------------------------------------------------------------------------------*/
      /* Team section 
      /* Card used to include Title of the Team
      /* Table used to list team mates details.                                               */
      /*--------------------------------------------------------------------------------*/
      <div>
        <Card id="teamcard">
          <CardBody>
            <div className="d-flex align-items-center">
              <div>
                <CardTitle>
                  <h4>Teams</h4>
                </CardTitle>
              </div>
            </div>
            <Table className="no-wrap v-middle teamcards" responsive>
              <tbody>
                <tr>
                  <td>
                    <div className="">
                      <img src={jsotomayor} alt="Logo" height="50" width="60" />
                    </div>
                  </td>

                  <td>Joel Sotomayor</td>
                  <td
                    className="blue-grey-text  text-darken-4 font-medium"
                    style={{ color: "black" }}
                  >
                    CEO & president
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="">
                      <img src={isoulee} alt="Logo" height="50" width="60" />
                    </div>
                  </td>

                  <td>Idris Soule</td>
                  <td
                    className="blue-grey-text  text-darken-4 font-medium"
                    style={{ color: "black" }}
                  >
                    CTO
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="">
                      <img src={zelbastami} alt="Logo" height="50" width="60" />
                    </div>
                  </td>

                  <td>Zak El-Bastami</td>
                  <td
                    className="blue-grey-text  text-darken-4 font-medium"
                    style={{ color: "black" }}
                  >
                    Software Developer
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="">
                      <img
                        src={cmcGladebouchard}
                        alt="Logo"
                        height="50"
                        width="60"
                      />
                    </div>
                  </td>

                  <td>Cameron McGlade-Bouchard</td>
                  <td
                    className="blue-grey-text  text-darken-4 font-medium"
                    style={{ color: "black" }}
                  >
                    Research Analyst
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="">
                      <img src={ariosyu} alt="Logo" height="50" width="60" />
                    </div>
                  </td>

                  <td>Arios Yu</td>
                  <td
                    className="blue-grey-text  text-darken-4 font-medium"
                    style={{ color: "black" }}
                  >
                    Hardware Engineer
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <Button variant ="info">+Member</Button>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
      /*--------------------------------------------------------------------------------*/
      /* End of Team section */
      /*--------------------------------------------------------------------------------*/
    );
  }
}

export default Team;
