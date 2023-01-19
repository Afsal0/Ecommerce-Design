import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="whole_container">
      <p style={{ textAlign: "center" }}>Lets fill the form</p>
      <div className="Main_Container">
        <div className="flex-column">
          <label for="name">Name</label>
          <input
            type={"text"}
            placeholder="Enter your name(Max-12 letters)"
            minLength={4}
            maxLength="12"
            id="name"
          />
        </div>
        <div className="flex-column">
          <label for="email">Email</label>
          <input type="text" placeholder="Enter Your email" id="email" />
        </div>
        <div className="flex-column">
          <label for="age">Age</label>
          <input
            type="text"
            placeholder="Enter your age"
            maxLength={2}
            id="age"
          />
        </div>
        <div className="flex-column">
          <label for="option">Which option best describes you?</label>
          <select id="option">
            <option>Student</option>
            <option>Employee</option>
            <option>Teacher</option>
          </select>
        </div>
        <div className="flex-column">
          <label>Would you like to buy a car?</label>
          <div>
            <div className="flex-row">
              <input type={"radio"} id="Yes" name="drone"></input>
              <label for="Yes">Yes</label>
            </div>
            <div className="flex-row">
              <input type={"radio"} id="No" name="drone"></input>
              <label for="No">No</label>
            </div>
            <div className="flex-row">
              <input type={"radio"} id="maybe" name="drone"></input>
              <label for="maybe">Maybe</label>
            </div>
          </div>
        </div>
        <div>
          <p>Languages and frameworks known:</p>
          <div className="flex-column">
            <div className="flex-row">
              <input type={"checkbox"} id="html"></input>
              <label for="html">Html</label>
            </div>
            <div className="flex-row">
              <input type={"checkbox"} id="css"></input>
              <label for="css">CSS</label>
            </div>
            <div className="flex-row">
              <input type={"checkbox"} id="Python"></input>
              <label for="Python">Python</label>
            </div>
            <div className="flex-row">
              <input type={"checkbox"} id="C++"></input>
              <label for="C++">C++</label>
            </div>
            <div className="flex-row">
              <input type={"checkbox"} id="React"></input>
              <label for="React">React</label>
            </div>
            <div className="flex-row">
              <input type={"checkbox"} id="Node"></input>
              <label for="Node">Node</label>
            </div>
          </div>
        </div>
        <div className="flex-column">
          <label for="comment">Any comments or suggestions</label>
          <textarea id="comment" rows={4} />
        </div>
        <button className="sumbit-button">Submit</button>
      </div>
    </div>
  );
}
