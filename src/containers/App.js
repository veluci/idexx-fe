import React, {Component} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "../containers/MainLayout/MainLayout";
import {connect} from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="container">
        <MainLayout/>
      </div>
    );
  }
}
export default connect()(App);
