import React, { Component } from "react";
import List from "../components/EmployeeDirectory//List";
import axios from "axios";

class EmployeeDirectory extends Component {
    state = {
        employee: [],
        employeesToDisplay: [],
        searchTerm: "",
    };

    componentDidMount() {
        this.getEmployees();
    }

    clearFilter = () => {
        this.setState({
            employeesToDisplay: this.state.employeesToDisplay,
            searchTerm: "",
        });
    };

    getEmployees = () => {
        axios
        .get("http://dummy.restapiexample.com/api/v1/employees")
        .then((response) => {
            this.setState({
                employees: response.data.data,
                employeesToDisplay: response.data.data,
            });
        })
        .catch((err) => {
            console.log(err);
        });
    };

    handleSubmit= (event) => {
        event.preventDefault();
        console.log("HandleSubmit");
        const employees = [...this.state.employees];
        const filterEmployees = employees.filter((employee) => {
            const regex = new RegExp(this.state.searchTerm, "gi");
            return employee.employee_name.match(regex);
        });
        this.state({
            employeesToDisplay: filteredEmployees,
        });
    };

    render() {
        return (
            <div>
                       <h1>Welcome to the employee directory.</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-sm-10">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search employees"
                        name="searchTerm"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              {this.state.employees.length !==
                this.state.employeesToDisplay.length && (
                <button
                  className="btn btn-secondary"
                  onClick={this.clearFilter}
                >
                  Clear Filter
                </button>
              )}
            </div>
          </div>
        </div>
        <List employees={this.state.employeesToDisplay} />
        </div>
        );
    }
}

export default EmployeeDirectory;