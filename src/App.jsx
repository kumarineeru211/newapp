import React from "react";
import "./App.css";
import { HiDotsVertical } from "react-icons/hi";
import { FaShare } from "react-icons/fa6";

export default function App() {
  return (
    <div className="App">
      <div className="picture">
        {/*  picture here */}
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.U9aCyMwHTbsXZ9A6Yu9omQHaFb&pid=Api&P=0&h=220"
          alt="Your Picture"
        />

        <div className="overlay">
          <span>Sports</span>
          <h2>
            Video of Gautam Gambhir To 'India Will Break' Chant is Doctored
          </h2>
          <div className="metadata">
            <span>-By Anmol Alphonso</span>
            <span className="separator"></span>
            <span>2 Days ago</span>
          </div>
        </div>
      </div>

      <div className="cards">
        {/* cards here */}
        <div className="card">
          <span className="pbg">Decode</span>
          <HiDotsVertical   className="icon"/>
          <FaShare className="icon"/>
          
         

          <h2>
            Clone fingerprints scam: story of Aadhar enabled payment system
          </h2>
          <p>The ApS was launched in 2014 by Indian government to empower...</p>

          <div className="metadata">
            <span>-By Anmol Alphonso</span>
            <span className="separator"></span>
            <span>2 Days ago</span>
          </div>
        </div>
        <div className="card">
          <span>Sports</span>
          <HiDotsVertical   className="icon"/>
          <FaShare className="icon"/>
          <h2>Asia Cup 2023 fake Anti-BCCI falsely Attributed to Sunil..</h2>
          <p>
            Boom found that Court is fake and Sunil Govaskar has made no such...
          </p>

          <div className="metadata">
            <span>-By Anmol Alphonso</span>
            <span className="separator"></span>
            <span>2 Days ago</span>
          </div>
        </div>
        <div className="card">
          <span className="pbg">Decode</span>
          <HiDotsVertical   className="icon"/>
          <FaShare className="icon"/>
          <h2>
            Clone fingerprints scam: story of Aadhar enabled payment system
          </h2>
          <p>The ApS was launched in 2014 by Indian government to empower...</p>

          <div className="metadata">
            <span>-By Anmol Alphonso</span>
            <span className="separator"></span>
            <span>2 Days ago</span>
          </div>
        </div>

        <div className="card">
          <span className="pbg">Decode</span>
          <HiDotsVertical   className="icon"/>
          <FaShare className="icon"/>
          <h2>
            Clone fingerprints scam: story of Aadhar enabled payment system
          </h2>
          <p>The ApS was launched in 2014 by Indian government to empower...</p>

          <div className="metadata">
            <span>-By Anmol Alphonso</span>
            <span className="separator"></span>
            <span>2 Days ago</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
