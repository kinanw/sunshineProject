import React, {Component} from 'react';
import '../schedule.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'

export default class Schedule extends Component {
  componentDidMount(){
    $('.opening-hours li').eq(new Date()
    .getDay())
    .addClass('w3-text-blue');
  }
    render() {
    return (
      <div className="w3-container w3-margin-left w3-margin-right">
        <div className="w3-row">
          <ul className="list-unstyled opening-hours">
          <li>Sunday<span className="pull-right">Closed</span></li>
          <li>Moday<span className="pull-right">8:00 AM to 6:00 PM</span></li>
          <li>Tuesday<span className="pull-right">8:00 AM to 6:00 PM</span></li>
          <li>Wednesday<span className="pull-right">8:00 AM to 6:00 PM</span></li>
          <li>Thursday<span className="pull-right">8:00 AM to 6:00 PM</span></li>
          <li>Friday<span className="pull-right">8:00 AM to 6:00 PM</span></li>
          <li>Saturday<span className="pull-right">9:00 AM to 3:00 PM</span></li>
          </ul>
        </div>
      </div>
    );
  }
}