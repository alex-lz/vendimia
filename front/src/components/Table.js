import React, { Component } from 'react';
import './Table.css'

class Table extends Component {
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
      <div>
        <p className="titleT">{this.props.title}</p>
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

export default Table;