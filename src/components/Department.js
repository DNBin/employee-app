import React, { Component } from "react";
import { Table } from "react-bootstrap";

export class Department extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [] };
  }
  componentDidMount() {
    this.refershList();
  }
  refershList() {
    this.setState({
      deps: [
        { DepartmentId: 1, DepartmentName: "IT" },
        { DepartmentId: 2, DepartmentName: "Sup" },
      ],
    });
  }

  render() {
    const { deps } = this.state;
    return (
      <div className="mt-5 d-flex justify-content-left">
        <h3>Department</h3>

        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {deps.map((dep) => (
              <tr key={dep.DepartmentId}>
                <td>{dep.DepartmentId}</td>
                <td>{dep.DepartmentName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
