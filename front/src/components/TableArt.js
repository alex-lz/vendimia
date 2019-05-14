import React, { Component } from 'react';
import './TableArt.css'

class TableArt extends Component {
  render() {

    const tableDates = this.props.dates.map((dateRow) =>
      <tr>
        { dateRow.map((date) => <td>{date}</td> ) }
      </tr>
    );
    
    const tableFields = this.props.fields.map((field) =>
      <th>{field}</th>
    );
    return (
      <div className="tableArt">
        <table>
	      <thead>
	      <tr>
	      	{tableFields}
	      </tr>
	      </thead>
	      <tbody>
	        {tableDates}
	      </tbody>
        </table>
      </div>
    );
  }
}

export default TableArt;