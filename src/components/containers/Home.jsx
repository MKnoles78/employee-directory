import React from "react";


function Home(props) {


  return (
      <>
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
            {/* <button type="button" onClick={() => setSortedField('#')}> */}
              #
            {/* </button> */}
            </th>
            <th scope="col">
            {/* <button type="button" onClick={() => setSortedField('first')}> */}
              First
            {/* </button> */}
            </th>
            <th scope="col">
            {/* <button type="button" onClick={() => setSortedField('last')}> */}
              Last
            {/* </button>  */}
              </th>
            <th scope="col">
            {/* <button type="button" onClick={() => setSortedField('codename')}> */}
              Codename
            {/* </button> */}
            </th>  
            <th scope="col">
            {/* <button type="button" onClick={() => setSortedField('codename')}> */}
              Email
            {/* </button>  */}
            </th>
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