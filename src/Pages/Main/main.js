import React, { useState, useEffect } from "react";
import "react-web-tabs/dist/react-web-tabs.css";
import "./css/footer.css";
import Product from "./product";
import "./js/github-widget.js";
import "./css/github-widget.css";
import Certificates from "./certificates";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs"; // core components
import { StickyContainer, Sticky } from "react-sticky";
import {Container,Row,Col,ScreenClassRender} from 'react-grid-system'
import Technologies from "./technologies";
import Hobbies from "./hobbies";
import Accounts from './accounts'
import Participation from './participation'
function Main() {
  const [w, setW] = useState(window.innerWidth);
  const [h, setH] = useState(window.innerHeight);
  const [bar, setBar] = useState(() => {
    if (w < 480) return h / 5 + 150 + 10000 / w;
    if (w < 900) return h / 5 - 60 + w / 5;
    if (w < 1050) return h / 5 - 60 + w / 5;
    if (w < 1300) return h / 5 - 60 + w / 5;
    else return h / 5 + 50;
  });

  window.addEventListener("resize", () => {
    setW(window.innerWidth);
    setH(window.innerHeight);
    console.log(window.innerWidth);
    setBar(() => {
      if (w < 480) return h / 5 + 150 + 10000 / w;
      if (w < 900) return h / 5 - 60 + w / 10;
      if (w < 1050) return h - 500 + 70;
      if (w < 1300) return h - 500 + 40;
      else return h / 5 + 50;
    });
  });

  return (
    <div className="App"  style={{backgroundColor:'#181A1B'}}>
      {console.log(w)}
      <img
        src={require("../../assets/img/mainimage.jpg")}
        style={{ height: h, minWidth: w }}
      />
      <div style={{ position: "relative", top: -h }}>
      <ScreenClassRender render={screenClass => (
  <h1
  style={{
    color: "#0E2E36",
    fontSize: ['xl'].includes(screenClass) ? '22rem' : '10rem',
    marginBottom: 0,
    textAlign: "center",
    marginTop: h / 8,
    fontFamily:'Passion One'
  }}
>
  Shivam Rawat
</h1>
)} />
           <ScreenClassRender render={screenClass => (
    <h1
    style={{
      color: "#33684D",
      fontSize: ['xl','lg'].includes(screenClass) ? '5rem' : '2rem',
      marginTop: 0,
      textAlign: "center",
      fontFamily:'Staatliches'
    }}
  >
    Student | Freelancer | Coder{" "}
  </h1>
)} />
      
        <i
          class="fa fa-angle-double-down"
          style={{
            color: "#5EA175",
            fontSize: 100,
            marginTop: h / 5,
            marginLeft: w / 2 - 30,
            marginBottom: bar
          }}
          onClick={() => {
            window.scrollTo(0, h);
          }}
        ></i>

        <Tabs
          style={{}}
          defaultTab="one"
          onChange={tabId => {
            console.log(tabId);
          }}
        >
          <TabList
            style={{
              zIndex:'3',
              backgroundColor: "#0E2F36",
              color: "white",
              textAlign: "center",
              position: "absolute",
              marginBottom: 350,
              marginTop: 0,
              top: (7 * h) / 8,
              width: w
            }}
          >
            <Tab tabFor="one" style={{ color: "white", fontSize: 20 ,fontFamily:'Baloo Bhai'}}>
              Products
            </Tab>
            <Tab tabFor="two" style={{ color: "white", fontSize: 20 ,fontFamily:'Baloo Bhai'}}>
              Participations
            </Tab>
     
            <Tab tabFor="four" style={{ color: "white", fontSize: 20 ,fontFamily:'Baloo Bhai'}}>
              Technologies
            </Tab>
           
            <Tab tabFor="six" style={{ color: "white", fontSize: 20,fontFamily:'Baloo Bhai' }}>
              Certificates
            </Tab>
            <Tab tabFor="seven" style={{ color: "white", fontSize: 20 ,fontFamily:'Baloo Bhai'}}>
              Hobbies
            </Tab>
            <Tab tabFor="three" style={{ color: "white", fontSize: 20 ,fontFamily:'Baloo Bhai'}}>
            Contact
            </Tab>
          </TabList>
          <TabPanel tabId="one" >
            <Product />
          </TabPanel>
          <TabPanel tabId="two">
         <Participation/>
          </TabPanel>
          <TabPanel tabId="three">
            <Accounts/>
          </TabPanel>
          <TabPanel tabId="four">
           <Technologies/>
          </TabPanel>
          <TabPanel tabId="six">
            <Certificates />
          </TabPanel>
          <TabPanel tabId="seven">
            <Hobbies />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Main;
