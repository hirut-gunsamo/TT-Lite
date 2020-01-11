/*! **********************************************
   *import all features displayed on sideNav section
    like icons, links and others*
   ************************************************ */

import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import "../../Assets/css/sideNav.css";
import { FaEye, FaMapMarkerAlt, FaProductHunt, FaPaypal } from "react-icons/fa";
import { MdAddAlert } from "react-icons/md";
import { AiOutlineTable } from "react-icons/ai";
import { GiShadowFollower } from "react-icons/gi";

function SideNav() {
  return (
    <div className="sidenav no-print left-side aside-left--fixed sidebar-offcanvas sidebar-animated">
      <div className="dash">
        <FaEye />
        <Link to="/dashboard/" id="link">
          Dashboard
        </Link>
      </div>
      <div className="aler">
        <MdAddAlert />
        <Link to="/dashboard/alert" id="link">
          Alert
        </Link>
      </div>
      <div className="data">
        <AiOutlineTable />
        <Link to="/dashboard/data-log" id="link">
          Data Log
        </Link>
      </div>
      <div className="maps">
        <FaMapMarkerAlt />
        <Link to="/dashboard/map" id="link">
          Map
        </Link>
      </div>
      <div className="sign">
        <FaProductHunt />
        <Link to="/dashboard/Product" id="link">
          Products
        </Link>
      </div>
      <div className="login">
        <GiShadowFollower />
        <Link to="/dashboard/Members" id="link">
          Members
        </Link>
      </div>
      <div className="payment">
        <FaPaypal />
        <Link to="/dashboard/Payment" id="link">
          Payment
        </Link>
      </div>
    </div>

    /*! *************
     *End of sideNav section*
     ************** */
  );
}

export default SideNav;
