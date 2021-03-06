import React, { Component } from "react";
import Navbar from "./common/navbar";
import { Link } from "react-router-dom";
import {VictoryBar, VictoryChart, VictoryLine } from "victory";

class Solution extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className = "mainbar col-md-12">
        <div className = "linechart linechart2 col-md-4">
        <div className="chart_heading">Money that are been saved, considering our recommendations</div>
        {" "}
        <VictoryChart
          domainPadding={{ x: 40 }}>
          <VictoryBar
            barRatio={0.8}
            style={{
              data: { fill: "#c43a31" }
            }}
            categories={{
              y: ["$"+"10b","$"+"20b","$"+"30b","$"+"40b","$"+"50b","$"+"60b"]
            }}
            cornerRadius={15}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
            labels={(d) => d.y + "0b"}
            data={[
              { x: "Los Angeles", y: 2 },
              { x: "New York City", y: 5 },
              { x: "San Francisco", y: 3 },
              { x: "Miami", y: 1}, 
            ]}
          />
        </VictoryChart>
          {/* <VictoryPie
            colorScale={["#008f68", "#6DB65B", "#4AAE9B", "#EFBB35"]}
            data={[
              { x: "A", y: 1234 },
              { x: "B", y: 2048 },
              { x: "C", y: 2600 },
              { x: "D", y: 9000 } 
            ]} */}
          
        </div>
        <div className = "text-data col-md-4">
          <div className="heading-text">
            <h1 className="trafficdata">Traffic Data Analysis</h1>
            <h3 className="wetell">
              We tell you the fastest day hour to commute to your destination
            </h3>
            <h4 className="bethe">BE THE SPEED YOU WISH TO SEE IN THE WORLD</h4>
            </div>
            <div className="homeBodyy2">
            Money and Time are saved using our recommendations
            </div>
        </div>
         <div className="linechart linechart2  col-md-4">
          {" "}
          <VictoryChart>
            <VictoryLine
              style={{ data: { fill: "blue" } }}
              data={[
                { x: "A", y: 1234 },
                { x: "B", y: 2048 },
                { x: "C", y: 2600 },
                { x: "D", y: 9000 }
              ]}
            />
          </VictoryChart>
         </div>     
        </div>
        <div className="homeBodyy">
          Graphical representation of Data Analysis
        </div>
        <div className="buttoncontainer">
        <button className="homeNextt">
          <Link
            className="homeNext_text"
            to={{
              pathname: "/problem1"
            }}
          >
          <div className="homeNexttext">
          Click to know examples of our solution
            </div>
          </Link>
        </button>
        </div>
        </div>
      // <div className="home">
      //   <Navbar />
      //   <div className="homeBody">
      //     <h1>Traffic Data Analysis</h1>
      //     <h3>
      //       We tell you the fastest day hour to commute to your destination
      //     </h3>
      //     <h4>BE THE SPEED YOU WISH TO SEE IN THE WORLD</h4>
      //   </div>
      //   <div className="pieChart">
      //     {" "}
      //     <VictoryPie
      //       colorScale={["#008f68", "#6DB65B", "#4AAE9B", "#EFBB35"]}
      //       data={[
      //         { x: "A", y: 1234 },
      //         { x: "B", y: 2048 },
      //         { x: "C", y: 2600 },
      //         { x: "D", y: 9000 }
      //       ]}
      //     />
      //   </div>
      //   <br /> <br /> <br />
      //   <div className="homeBody2">
      //     Time Companies are saving using our recommendations
      //   </div>
      //   <div className="lineChart">
      //     {" "}
      //     <VictoryChart>
      //       <VictoryLine
      //         style={{ data: { fill: "blue" } }}
      //         data={[
      //           { x: "A", y: 1234 },
      //           { x: "B", y: 2048 },
      //           { x: "C", y: 2600 },
      //           { x: "D", y: 9000 }
      //         ]}
      //       />
      //     </VictoryChart>
      //   </div>
      //   <br />
      //   <div className="homeBody3">
      //     Graphical representation of Data Analysis
      //   </div>
      //   <button className="homeNext">
      //     <Link
      //       className="homeNext_text"
      //       to={{
      //         pathname: "/problem1"
      //       }}
      //     >
      //       Click to know examples of our solution
      //     </Link>
      //   </button>
      // </div>
    );
  }
}
export default Solution