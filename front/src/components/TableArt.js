import React, { Component } from 'react';
import './TableArt.css'

class TableArt extends Component {
  delete (id) {
    let obj = localStorage.getObj("Venta");
    //()=>document.getElementById(idRow).remove(
    let i = id - 1;
    const filteredItems = obj.slice(0, i).concat(obj.slice(i+1, obj.length))
    localStorage.setObj("Venta", filteredItems);
  }
  render() {
    let idRow = "";
    let contRow = 0;
    const tableDates = this.props.dates.map((dateRow) => {
        let cont = 0;

        contRow += 1;
        idRow = "row"+contRow+Math.random();
        return(
        <tr id={idRow}>
          {  dateRow.map((date) => {
             cont += 1;
             return(
             <td>
                {date}
                {cont === 5 ? <a className="btn circle ired" onClick={this.delete.bind(this,contRow)}>x</a>:null}
             </td> ) 
          }) }
        </tr> )
    });
  
    const tableFields = this.props.fields.map((field) => 
      <th>
        {field}
      </th>
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