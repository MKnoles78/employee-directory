import React from "react";


function Home(props) {
  return (
      <>
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Codename</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
         {props.employees.map(employee => (
          <tr>
            <th scope="row">{employee.id}</th>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.codename}</td>
            <td>{employee.email}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
    );
};

export default Home;