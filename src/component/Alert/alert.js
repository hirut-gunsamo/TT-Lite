//import features displayed on alert page
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../index.css';

function AlertMain() {
  function Notify1() {
    toast("Sensor 1 triggered april 12,2018 at 12:01am", {
       //toast will be closed after 10 seconds
       autoClose: 10000
       
    });

  }
  function Notify() {
    toast("Sensor 2 triggered june 18,2019 at 09:01am", {
       //toast will be closed after 15 seconds
       autoClose: 15000
    });

  }
  function Notify2() {
    toast("Sensor 7 triggered feb 8,2020 at 3:09pm", {
       //toast will be closed after 10 seconds
       autoClose: 10000
    });

  }
  function Notify12() {
    toast("Sensor 8 triggered sep 21,2020 at 10:08am", {
       //toast will be closed after 12 seconds
       autoClose: 12000
    });

  }
  function Notify3() {
    toast("Sensor 4 was triggered mar 28,2020 at 5:10pm", {
       //toast will be closed after 10 seconds
       autoClose: 10000
    });

  }

  function Notify13() {
    toast("Sensor 5 was triggered oct 28,2020 at 8:19pm", {
       //toast will be closed after 14 seconds
       autoClose: 14000
    });

  }
  function Notify4() {
    toast("Sensor 23 triggered jan 16,2019 at 1:19am", {
       //toast will be closed after 11 seconds
       autoClose: 11000
    });
  }
  function Notify14() {
    toast("Sensor 34 triggered apr 26,2019 at 11:10pm", {
       //toast will be closed after 10 seconds
       autoClose: 10000
    });
  }
    function Notify5() {
      toast("Sensor 5 triggered sep 09,2020 at 4:49pm", {
         //toast will be closed after 12seconds
         autoClose: 12000
      });

  }

  function Notify15() {
    toast("Sensor 10 triggered sep 09,2018 at 4:49pm", {
       //toast will be closed after 11 seconds
       autoClose: 11000
    });

}
function Notify6() {
  toast("Sensor 15 triggered aug 09,2019 at 01:20pm", {
     //toast will be closed after 10 seconds
     autoClose: 10000
  });

}
function Notify16() {
  toast("Sensor 35 triggered sep 09,2020 at 4:49pm", {
     //toast will be closed after 20 seconds
     autoClose: 20000
  });

}
  return (<div className="AlertMain">
    <div >
      <ToastContainer />
      <button onClick={Notify1} className="s1">sensor1</button>
      <button onClick={Notify} className="s11">sensor2</button>
      <button onClick={Notify2} className="s2">sensor7</button>
      <button onClick={Notify12} className="s12">sensor8</button>
      <button onClick={Notify3} className="s3">sensor4</button>
      <button onClick={Notify13} className="s13">sensor5</button>
      <button onClick={Notify4} className="s4">sensor23</button>
      <button onClick={Notify14} className="s14">sensor34</button>
      <button onClick={Notify5} className="s5">sensor10</button>
      <button onClick={Notify15} className="s15">sensor15</button>
      <button onClick={Notify6} className="s6">sensor35</button>
      <button onClick={Notify16} className="s16">sensor28</button>
      </div>
    </div>
    
  
  );
}
      /*-------------------------------------*/
      /* End of alert section */
      /*-------------------------------------*/
   
export default AlertMain;
