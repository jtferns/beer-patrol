import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class BeerTable extends Component {
  render() {
    return (
      <ReactTable
        data={this.props.beers}
        columns={[
          {
            Header: "Brewery",
            columns: [
              {
                Header: "Name",
                accessor: "brewery"
              },
              {
                Header: "Origin",
                accessor: "breweryOrigin"
              },
              {
                Header: "Retail",
                accessor: "retailLocation"
              }
            ]
          },
          {
            Header: "Beer",
            columns: [
              {
                Header: "Name",
                accessor: "beerName"
              },
              {
                Header: "%",
                accessor: "beerAbv"
              },
              {
                Header: "Size (Growler)",
                accessor: "growlerSize"
              }
            ]
          },
          {
            Header: "Cost",
            columns: [
              {
                Header: "Cost (Growler)",
                accessor: "growlerPrice"
              },
              {
                Header: "Cost (Draft)",
                accessor: "draftPrice"
              }
            ]
          }
        ]}
        className="-striped -highlight"
      />
    );
  }
}

export default BeerTable;
